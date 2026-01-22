import "./MovieCard.css";
import { Link } from "react-router-dom";



export default function MovieCard({ movie }) {

    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

    return (
        <div className="movie-card">

            <div className="card-img">
                <img
                    src={`${backendBaseUrl}/imgs/${movie.image}`}
                    alt={movie.title}
                />
            </div>

            <div className="card-info">
                <h3 className="card-title mb-20"> {movie.title}</h3>
                <p className="mb-15">Director: {movie.director}</p>
                <p className="mb-15">Genre: {movie.genre}</p>
                <p className="mb-15">Release year: {movie.release_year}</p>
                <p > Description: {movie.abstract}</p>

                <div className="flex">

                    <Link to={`/movies/${movie.slug}`} className="seeDetailsBtn">
                        See details
                    </Link>

                </div>

            </div>

        </div>
    );
}