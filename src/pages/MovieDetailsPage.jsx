import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import { useNavigate, useParams } from "react-router-dom";
import "./MovieDetailsPage.css";



export default function MoviesDetailPage() {

    const [movie, setMovie] = useState({});
    const { slug } = useParams();

    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();


    useEffect(() => {
        getMovie();
    }, [slug]);


    function getMovie() {
        axios
            .get(`${backendBaseUrl}/api/books/${slug}`)
            .then((resp) => {
                setMovie(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }



    function goBack(event) {
        event.preventDefault();

        navigate(-1);
    }

    return (
        <> <div className=" movie-container">

            <section
                className="page-banner"
                style={{
                    backgroundImage: `url(${backendBaseUrl}/imgs/${movie.image})`,
                }}
            >
            </section>

            <div className="movie-info">

                <h3 className="mb-20">Director: {movie.director}</h3>
                <h3 className="mb-20">Genre: {movie.genre}</h3>
                <h3 className="mb-20">Release year: {movie.release_year}</h3>
                <h3 > Description: {movie.abstract}</h3>
            </div>

            <section className="reviews">
                <h3 className="red mb-20">Reviews:</h3>
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

            <section className="flex">
                <div className=" go-back-btn">
                    <a href="" onClick={goBack}>
                        Go back to previous page
                    </a>
                </div>
            </section>

        </div>

        </>
    );
}