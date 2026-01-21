import axios from "axios";
import { useEffect, useState } from "react";
import "./MoviesPage.css";
import MovieCard from "../components/MovieCard";


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

           <div className="movies-grid" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          
        ))}
      </div>
      
    </div>
  );
}