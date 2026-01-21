import axios from "axios";
import { useEffect, useState } from "react";
import "./MoviesPage.css";


export default function MoviesPage() {


  const [movies, setMovies] = useState([]);
   const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

  
  useEffect(() => {
  
    axios
      .get(`${backendBaseUrl}/api/movies`)
      .then((resp) => {
        setMovies(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });


  }, []);



  return (
    <div className="movies-container">
      
      <div className="movies-grid">
        {movies.map((movie) => (
          
          <div key={movie.id} className="movie-card">
            
            <div className="card-img">
              <img 
                src={`${backendBaseUrl}/imgs/${movie.image}`}
                alt={movie.title}
              />
            </div>
            
            <div className="card-info">
              <h3 className="card-title"> {movie.title}</h3>
              
              <div className="card-details">
                <p>Director: {movie.director}</p>
                <p>Genre: {movie.genre}</p>
                <p>Release year: {movie.release_year}</p>
                <p className="overview"> Description: {movie.abstract}</p>
              </div>

              <div className="flex">
                <button className="seeDetailsBtn">See details</button>

              </div>
              
            </div>
            
          </div>
          
        ))}
      </div>
      
    </div>
  );
}