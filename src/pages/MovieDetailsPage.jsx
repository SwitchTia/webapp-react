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
            .get(`${backendBaseUrl}/api/movies/${id}`)
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
        <> <div className="movie-container">

            <section
                className="page-banner"
                style={{
                    backgroundImage: `url(${backendBaseUrl}/imgs/${movie.image})`,
                }}
            >
            </section>

            <div className="movie-info">
                <h1 >{movie.title}</h1>
                <h2>Director: {movie.director}</h2>
                <h3>Genre: {movie.genre}</h3>
                <h3>Release year: {movie.release_year}</h3>
                <h4 > Description: {movie.abstract}</h4>
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



            <div className="go-back-btn">
                <a href=""onClick={goBack}>
                    Go back to previous page
                </a>
            </div>

        </div>

        </>
    );
}