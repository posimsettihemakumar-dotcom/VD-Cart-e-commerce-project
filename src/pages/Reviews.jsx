import "../css/reviews.css";

import { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const addReview = () => {
    if (!name || !rating || !comment) {
      alert("Fill all fields");
      return;
    }

    const newReview = {
      id: Date.now(),
      name,
      rating,
      comment,
    };

    setReviews([...reviews, newReview]);

    setName("");
    setRating("");
    setComment("");
  };

  return (
    <div style={{ width: "70%", margin: "40px auto" }} className="reviews-container">
      <h1 className="reviews-title">Product Reviews ⭐</h1>

      <input className="review-input"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <select className="review-select"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="">Select Rating</option>
        <option>1 ⭐</option>
        <option>2 ⭐⭐</option>
        <option>3 ⭐⭐⭐</option>
        <option>4 ⭐⭐⭐⭐</option>
        <option>5 ⭐⭐⭐⭐⭐</option>
      </select>

      <br /><br />

      <textarea className="review-textarea"
        placeholder="Write review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <br /><br />

      <button className="review-btn" onClick={addReview}>
        Submit Review
      </button>

      <hr />

      {reviews.map((item) => (
        <div className="review-card" key={item.id}>
          <h3>{item.name}</h3>
          <p className="review-rating">{item.rating}</p>
          <p>{item.comment}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Reviews;