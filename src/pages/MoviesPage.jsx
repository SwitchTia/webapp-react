import axios from "axios";
import { useEffect, useState } from "react";
import "./MoviesPage.css";


export default function MoviesPage() {


  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
  
    axios
      .get("http://localhost:3000/api/movies")
      .then((resp) => {
        setMovies(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });


  }, []);



  return (
    <div className="movies-container">
      <h1>All Movies</h1>
      
      <div className="movies-grid">
        {movies.map((movie) => (
          
          <div key={movie.id} className="movie-card">
            
            <div className="card-img">
              <img 
                src={`http://localhost:3000/imgs/${movie.image}`}
                alt={movie.title}
              />
            </div>
            
            <div className="card-info">
              <h3 className="card-title">{movie.title}</h3>
              
              <div className="card-details">
                <p>Director: {movie.director}</p>
                <p>Genre: {movie.genre}</p>
                <p>Release year: {movie.year}</p>
                <p className="overview">{movie.abstract}</p>
              </div>
            </div>
            
          </div>
          
        ))}
      </div>
      
    </div>
  );
}