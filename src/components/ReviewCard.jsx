import "./ReviewCard.css";


export default function ReviewCard({ review }) {

  return (
    <div className="review-card">
      
        <h4 className="card-title">
          Written by {review.name} <span>{review.vote}</span>
        </h4>
        <p className="card-text">{review.text}</p>
        <p className="text-end">{review.created_at}</p>
  
    </div>
  );
}