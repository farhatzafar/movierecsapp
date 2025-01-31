package com.movieapp.movie_recommendation.controller;

import com.movieapp.movie_recommendation.model.Movie;
import com.movieapp.movie_recommendation.repository.MovieRepository;
import com.movieapp.movie_recommendation.repository.PreferencesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from your frontend
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private PreferencesRepository preferencesRepository;

    // Get movies with optional filtering by genre, release year, or lead actor gender
    @GetMapping("/movies")
    public List<Movie> getAllMovies(
            @RequestParam(required = false) String genre,
            @RequestParam(required = false) Integer releaseYear,
            @RequestParam(required = false) String leadActorGender) {

        // If all filters are provided
        if (genre != null && releaseYear != null && leadActorGender != null) {
            return movieRepository.findByGenreAndLeadActorGenderAndReleaseYear(genre, leadActorGender, releaseYear);
        }

        // If only genre is provided
        if (genre != null) {
            return movieRepository.findByGenreIgnoreCase(genre);
        }

        // If only releaseYear is provided
        if (releaseYear != null) {
            return movieRepository.findByReleaseYear(releaseYear);
        }

        // If only leadActorGender is provided
        if (leadActorGender != null) {
            return movieRepository.findByLeadActorGender(leadActorGender);
        }

        // If no filters are provided, return all movies
        return movieRepository.findAll();
    }

    // Method to get a movie by movieId
    @GetMapping("/movies/{movieId}")
    public Movie getMovieById(@PathVariable Long movieId) {
        return movieRepository.findByMovieId(movieId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie not found"));
    }

    // Method to get recommendations (based on user preferences, as before)
    @GetMapping("/recommendations")
    public List<Movie> getRecommendations(@RequestParam Long userId) {
        // Fetch preferences for the user
        var preferences = preferencesRepository.findById(userId).orElseThrow();

        // Get movies based on user preferences
        return movieRepository.findByGenreAndLeadActorGenderAndReleaseYear(
                preferences.getPreferredGenre(),
                preferences.getPreferredLeadActorGender(),
                preferences.getPreferredReleaseYear());
    }
}
