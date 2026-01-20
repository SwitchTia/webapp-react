import axios from "axios";
import { useEffect, useState } from "react";


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
    <>
      <section >
        
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
}