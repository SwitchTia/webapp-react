import "./HomePage.css";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

  function handleSubmit(event) {
    event.preventDefault();
    getMovies();
  }

  function getMovies() {


    axios
      .get(`${backendBaseUrl}/api/movies/search?key=${search}`)
      .then((resp) => {
        setMovies(resp.data.results || []);
      })
      .catch((err) => {
        console.log(err);
        setMovies([]);
      });
  }

  return (
    <>
      <section className="home-container">
        <div className="hero-section">
          <h1>Unlimited movies, TV shows, and more</h1>
        </div>
        <div className="search-section">
          <h2>
            Ready to watch? Browse our collection of amazing films and series.
          </h2>


          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Searching for something?"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />


            <button type="submit">Search</button>
          </form>


          <div className="movies-container">
            <div className="movies-grid">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}