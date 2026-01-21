import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import { useNavigate, useParams } from "react-router-dom";
import "./MovieDetailsPage.css";



export default function MoviesDetailPage() {

    const [movie, setMovie] = useState({});
    const { id } = useParams();

    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();


    useEffect(() => {
        axios
            .get (`${backendBaseUrl}/api/movies/${id}`)
            .then((resp) => {
                setMovie(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [id]);



    function goBack(event) {
        event.preventDefault();

        navigate(-1);
    }

    return (
        <>
            <section
                className="page-banner"
                style={{
                    backgroundImage: `url(${backendBaseUrl}/imgs/${movie.image})`,
                }}
            >
                <div className="movie-container">
                    <h1 className="movie-title">{movie.title}</h1>
                </div>
            </section>

            <div className="card-details">
                <h2>Director: {movie.director}</h2>
                <h3>Genre: {movie.genre}</h3>
                <h3>Release year: {movie.release_year}</h3>
                <h2 className="overview"> Description: {movie.abstract}</h2>
            </div>
            
            <section className="reviews">
                <h2>Reviews:</h2>
                <div className="reviews-grid">
                    {movie.reviews && movie.reviews.length > 0 ? (
                        movie.reviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))
                    ) : (
                        <p>There are no reviews</p>
                    )}
                </div>
            </section>



            <div className="container py-5 text-center">
                <a href="" onClick={goBack}>
                    Go back to previous page
                </a>
            </div>
            
        </>
    );
}