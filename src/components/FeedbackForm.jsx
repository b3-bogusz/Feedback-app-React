import React from "react";
import { useState, useContext } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback } = useContext(FeedbackContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text: review,
      rating,
    };
    addFeedback(newFeedback);
    setReview("");
  };

  const handleTextChange = (e) => {
    if (review === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (review !== "" && review.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("You review must contain at least 10 characters.");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setReview(e.target.value);
  };

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would You rate Your experience?</h2>
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Wrtie a review"
              value={review}
            />
            <Button type="submit" version="secondary" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
