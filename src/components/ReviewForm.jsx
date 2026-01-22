import axios from "axios";
import { useState } from "react";
import "./ReviewForm.css"

const initialFormData = {
  name: "",
  vote: 1,
  text: "",
};

export default function ReviewForm({ movieId,  reloadReviews }) {
  const [formData, setFormData] = useState(initialFormData);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  function updateFormData(event) {
    const value = event.target.value; // 5
    const key = event.target.name; // vote
    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios

      .post(`${backendUrl}/api/movies/${movieId}/reviews`, formData)
      .then((resp) => {
        setFormData(initialFormData);
        reloadReviews();
      })

      .catch((err) => {
        alert(err.response.data.message);
      });
  }


  return (
    <form className="review-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    value={formData.name}
                    onChange={updateFormData}
                    type="text"
                    id="name"
                    name="name"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="vote">Vote (1-5)</label>
                <input
                    value={formData.vote}
                    onChange={updateFormData}
                    type="number"
                    id="vote"
                    name="vote"
                    required
                    max="5"
                    min="1"
                />
            </div>

            <div className="form-group">
                <label htmlFor="text">Review</label>
                <textarea
                    value={formData.text}
                    onChange={updateFormData}
                    name="text"
                    id="text"
                    rows="5"
                ></textarea>
            </div>

            <button className="submit-btn" type="submit">Submit Review</button>
        </form>
  );
}