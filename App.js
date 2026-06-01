import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1>Movie List</h1>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.id}. {movie.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;