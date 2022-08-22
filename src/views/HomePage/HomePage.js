import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../services/ServiceAPI";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();
  const location = useLocation();
  //   const match = useRouteMatch();
  //   console.log(match);

  useEffect(() => {
    getTrendingMovies()
      .then(({ data }) => setMovies(data.results))
      .catch((error) => alert("Something went wrong. Please try again later."));
  }, []);
  //   console.log(url);

  return (
    <>
      {movies && (
        <>
          <h2 className={s.title}>Trending today</h2>
          <ul className={s["home-list"]}>
            {movies.map(({ id, poster_path, title }) => (
              <li key={id} className={s["home-item"]}>
                <Link
                  to={{
                    pathname: `${url}movies/${id}`,
                    state: { from: location },
                  }}
                >
                  <p className={s["home-title"]}>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default HomePage;
