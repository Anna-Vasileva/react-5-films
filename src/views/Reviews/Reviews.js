import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getMoviesReviews } from "../../services/ServiceAPI";
import s from "./Reviews.module.css";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMoviesReviews(movieId)
      .then(({ data }) => {
        // console.log(data);
        if (data.results.length === 0) {
          alert("Reviews is not available.");
        }

        setReviews(data.results);
        // console.log(reviews);
      })
      .catch(() => {
        alert("Something went wrong. Please try again later.");
      });
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={s["reviews-list"]}>
          {reviews.map(({ author, content, id }) => (
            <li key={id} className={s["reviews-item"]}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s["reviews-text"]}>
          We do not have any reviews for this movie.
        </p>
      )}
    </>
  );
};
Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
export default Reviews;
