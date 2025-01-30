package com.movieapp.movie_recommendation.repository;

import com.movieapp.movie_recommendation.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MovieRepository  extends JpaRepository<Movie, Long> {

    List<Movie> findByGenreAndLeadActorGenderAndReleaseYear(String genre, String leadActorGender, int releaseYear);

    // Add the following methods for individual filters
    List<Movie> findByGenre(String genre);

    List<Movie> findByReleaseYear(int releaseYear);

    List<Movie> findByLeadActorGender(String leadActorGender);

    // Optional: Add the method to find by movieId if needed
    Optional<Movie> findByMovieId(Long movieId);
}
