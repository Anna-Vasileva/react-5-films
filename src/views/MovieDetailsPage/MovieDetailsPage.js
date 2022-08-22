import { lazy, Suspense, useEffect, useState } from "react";
import {
  NavLink,
  useParams,
  Route,
  useRouteMatch,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { getMoviesById } from "../../services/ServiceAPI";
import s from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader";

// import myError from "../../components/Message";
// import { ToastContainer } from "react-toastify";

const Cast = lazy(() => import("../Cast"));
const Reviews = lazy(() => import("../Reviews"));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState([]);

  const defaultImage = "https://i.postimg.cc/VNTY47h0/image.jpg";

  const { poster_path, title, overview, genres, vote_average } = movie;
  const genresName = genres?.map((el) => el.name).join();

  //   console.log(url);
  useEffect(() => {
    getMoviesById(movieId)
      .then(({ data }) => {
        setMovie(data);
      })
      .catch((error) => alert("Something went wrong. Please try again later."));
    // .catch((error) =>
    //   myError("Something went wrong. Please try again later.")
    // );
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };
  return (
    <>
      {movie && (
        <section className={s.section}>
          <button type="button" className={s.btn} onClick={onGoBack}>
            Go back
          </button>
          <div className={s.wrapper}>
            <div className={s.thumb}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImage
                }
                alt={title}
                className={s["details-img"]}
              />
            </div>
            <div className={s.description}>
              <h2>{title}</h2>
              <p className={s.text}>
                User score:{" "}
                <span className={s.accent}>{vote_average * 10}%</span>
              </p>
              <h2>Overview</h2>
              <p className={s.text}>{overview}</p>
              <h2>Genres</h2>
              <p className={s.text}>{genresName}</p>
            </div>
          </div>
        </section>
      )}
      <section className={s.section}>
        <h4>Additional information</h4>
        <ul className={s["details-list"]}>
          <li className={s["details-item"]}>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from },
              }}
              className={s["details-title"]}
              activeClassName={s["details-title--current"]}
            >
              Cast
            </NavLink>
          </li>
          <li className={s["details-item"]}>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from },
              }}
              className={s["details-title"]}
              activeClassName={s["details-title--current"]}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/movies/:movieId/cast">
              <Cast movieId={movieId} />
            </Route>
            <Route path="/movies/:movieId/reviews">
              <Reviews movieId={movieId} />
            </Route>
          </Switch>
        </Suspense>
      </section>
      {/* <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      ;
    </>
  );
};

export default MovieDetailsPage;
