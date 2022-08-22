import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getMovieCredits } from "../../services/ServiceAPI";
import s from "./Cast.module.css";

const defaultImage = "https://i.postimg.cc/VNTY47h0/image.jpg";

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(({ data }) => {
        if (data.cast.length === 0) {
          alert("Cast is not available.");
        }
        setCast(data.cast);
      })
      .catch((error) => alert("Something went wrong. Please try again later."));
  }, [movieId]);
  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={s["cast-item"]}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                    : defaultImage
                }
                alt={name}
                className={s["cast-img"]}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
export default Cast;
