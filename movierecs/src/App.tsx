import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Card, CardContent, CardMedia, Typography, Paper } from "@mui/material";

type Movie = {
  id: number;
  title: string;
  genre: string;
  releaseYear: number;
  leadActorGender: string;
  posterUrl: string;
};

const App = () => {
  const [genre, setGenre] = useState<string>("");
  const [releaseYear, setReleaseYear] = useState<number | null>(null);
  const [leadActorGender, setLeadActorGender] = useState<string>("");
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const [showQuestions, setShowQuestions] = useState<boolean>(true);

  const handleGenreClick = (selectedGenre: string) => setGenre(selectedGenre);
  const handleReleaseYearClick = (selectedYear: number) => setReleaseYear(selectedYear);
  const handleLeadActorGenderClick = (selectedGender: string) => setLeadActorGender(selectedGender);

  const handleRecommendClick = async () => {
    if (!genre || !releaseYear || !leadActorGender) {
      alert("Please make sure all selections are made before recommending movies.");
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8080/movies?genre=${genre}&releaseYear=${releaseYear}&leadActorGender=${leadActorGender}`
      );
      setRecommendedMovies(response.data);
      setShowQuestions(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      alert("Something went wrong while fetching recommendations");
    }
  };

  const handleViewAllMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8080/movies");
      setRecommendedMovies(response.data);
      setShowQuestions(false);
    } catch (error) {
      console.error("Error fetching all movies:", error);
      alert("Something went wrong while fetching all movies");
    }
  };

  const handleGoBack = () => {
    setShowQuestions(true);
    setRecommendedMovies([]);
  };

  return (
    <div className="App">
      <h1>Farhat's Movie Recommendations</h1>

      {showQuestions && (
        <div className="filters">
          <div>
            <h2>Which genre of movie do you prefer?</h2>
            {["Drama", "Comedy", "Horror"].map((option) => (
              <button
                key={option}
                onClick={() => handleGenreClick(option)}
                style={{
                  backgroundColor: genre === option ? "#ffcc00" : "#fdf0d5",
                  color: genre === option ? "black" : "black",
                  border: genre === option ? "2px solid #ff9900" : "1px solid gray",
                }}
              >
                {option}
              </button>
            ))}
          </div>

          <div>
            <h2>Please pick a release year:</h2>
            {[2020, 2021, 2022, 2023, 2024].map((year) => (
              <button
                key={year}
                onClick={() => handleReleaseYearClick(year)}
                style={{
                  backgroundColor: releaseYear === year ? "#ffcc00" : "#fdf0d5",
                  color: releaseYear === year ? "black" : "black",
                  border: releaseYear === year ? "2px solid #ff9900" : "1px solid gray",
                }}
              >
                {year}
              </button>
            ))}
          </div>

          <div>
            <h2>Do you prefer movies with a female lead or a male lead?</h2>
            {["female", "male"].map((option) => (
              <button
                key={option}
                onClick={() => handleLeadActorGenderClick(option)}
                style={{
                  backgroundColor: leadActorGender === option ? "#ffcc00" : "#fdf0d5",
                  color: leadActorGender === option ? "black" : "black",
                  border: leadActorGender === option ? "2px solid #ff9900" : "1px solid gray",
                }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {showQuestions && (
        <button className="recbutton" onClick={handleRecommendClick}>
        Recommend me some movies
      </button>
      )}

      {showQuestions && (
        <button className="allbutton" onClick={handleViewAllMovies}>
          View All Movies
        </button>
      )}

      {!showQuestions && (
        <button style={{ backgroundColor: "#ef233c", color: "white", margin: "1rem" }} onClick={handleGoBack}>
          Go Back
        </button>
      )}

      <div className="movie-cards">
        {recommendedMovies.length > 0 ? (
          recommendedMovies.map((movie) => (
            <Paper key={movie.id} elevation={3} style={{ margin: "1rem", padding: "1rem", maxWidth: "250px" }}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={movie.posterUrl || "https://via.placeholder.com/150"}
                  alt={movie.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Genre: {movie.genre}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Release Year: {movie.releaseYear}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lead Actor Gender: {movie.leadActorGender}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          ))
        ) : (
          <p style={{ color: "white" }}>No movies to display</p>
        )}
      </div>
    </div>
  );
};

export default App;
