import React from "react";

function RatingCard({ rating = 0 }) {
  return (
    <div className="rating-container">
      <div className="rating">
        <div className="rating-score">{rating}</div>
        <div className="rating-text">RARE</div>
      </div>
      <div className="my-rating">my rating:</div>
      <div className="my-rating-number">not rated</div>
    </div>
  );
}

export default RatingCard;
