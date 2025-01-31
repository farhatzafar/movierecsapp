import React, { useState } from "react";
import axios from "axios";
import "./App.css";

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
      setShowQuestions(false); // Hide the questions when recommendations are shown
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
            <button onClick={() => handleGenreClick("Drama")}>Drama</button>
            <button onClick={() => handleGenreClick("Comedy")}>Comedy</button>
            <button onClick={() => handleGenreClick("Horror")}>Horror</button>
          </div>

          <div>
            <h2>Please pick a release year:</h2>
            <button onClick={() => handleReleaseYearClick(2020)}>2020</button>
            <button onClick={() => handleReleaseYearClick(2021)}>2021</button>
            <button onClick={() => handleReleaseYearClick(2022)}>2022</button>
            <button onClick={() => handleReleaseYearClick(2023)}>2023</button>
            <button onClick={() => handleReleaseYearClick(2024)}>2024</button>
          </div>

          <div>
            <h2>Do you prefer movies with a female lead or a male lead?</h2>
            <button onClick={() => handleLeadActorGenderClick("female")}>Female</button>
            <button onClick={() => handleLeadActorGenderClick("male")}>Male</button>
          </div>
        </div>
      )}
      
      {showQuestions && (
        <button style={{ backgroundColor: "#80ed99", color: "black", margin: "1rem" }} onClick={handleRecommendClick}>
          Recommend me some movies
        </button>
      )}

      {showQuestions && (
        <button style={{ backgroundColor: "#4da6ff", color: "white", margin: "1rem" }} onClick={handleViewAllMovies}>
          View All Movies
        </button>
      )}

      {!showQuestions && (
        <button style={{ backgroundColor: "#ff6b6b", color: "white", margin: "1rem" }} onClick={handleGoBack}>
          Go Back
        </button>
      )}

      <div className="movie-cards">
        {recommendedMovies.length > 0 ? (
          recommendedMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.posterUrl || "https://via.placeholder.com/150"}
                alt={movie.title}
                className="movie-poster"
              />
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Release Year: {movie.releaseYear}</p>
              <p>Lead Actor Gender: {movie.leadActorGender}</p>
            </div>
          ))
        ) : (
          <p>No movies to display</p>
        )}
      </div>
    </div>
  );
};

export default App;
