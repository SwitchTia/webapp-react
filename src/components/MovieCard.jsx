import "./MovieCard.css";
import { Link } from "react-router-dom";



export default function MovieCard({ movie }) {

    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

    return (
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

                    <Link to={`/movies/${movie.id}`} className="seeDetailsBtn">
                        See details
                    </Link>
                    
                </div>

            </div>

        </div>
    );
}