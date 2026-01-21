import "./ReviewCard.css";
import StarEmpty from "../assets/StarEmpty";
import StarFull from "../assets/StarFull";


export default function ReviewCard({ review }) {

  function convertVoteToStars (vote){
        const stars = Math.ceil(vote/2);
        return stars;
    }
    function renderStars(){
        const starCount = convertVoteToStars(review.vote);
        const stars = [];

        for (let i = 1; i <= 5; i++){
            if(i <= starCount){
                stars.push(<StarFull key={i} />);
            }
            else{
                stars.push(<StarEmpty key={i} />);
            }
        }
        return stars;

    }

  return (
    <div className="review-card">

      <div className="review-info ">
        <h3 >Written by {review.name}</h3>
        <h4 className="mb-30">Review vote: 
                    {renderStars()}
                </h4>

        <h5 className="mb-30">Review: {review.text}</h5>
        <h5>Written on date:{review.created_at}</h5>
      </div>


    </div>
  );
}