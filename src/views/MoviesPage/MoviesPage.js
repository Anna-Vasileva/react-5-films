import { useEffect, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import s from "./MoviesPage.module.css";
import SearchInput from "../../components/SearchInput/SearchInput";
import { getSearchMovies } from "../../services/ServiceAPI";

const MoviesPage = () => {
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const defaultImage = "https://i.postimg.cc/VNTY47h0/image.jpg";
  const searchQuery = new URLSearchParams(location.search).get("query") ?? "";
  // const searchQuery = "";
  const onSubmit = (query) => {
    history.push({ ...location, search: `query=${query}` });
  };

  useEffect(() => {
    console.log(searchQuery);
    if (!searchQuery) return;
    getSearchMovies(searchQuery)
      .then(({ data }) => {
        if (data.results.length === 0) {
          alert("No results found.");
          //   console.log("MoviesPage:data.results.length === 0");
          setMovie([]);
        }
        // console.log(data.results);
        setMovie(data.results);
      })
      .catch((error) => {
        alert("Something went wrong. Please try again later.");
        // console.log("Ошибка:MoviesPage");
      });
  }, [searchQuery]);
  // console.log(movie);
  return (
    <section>
      <SearchInput onSubmit={onSubmit} />;
      {movie && (
        <div className={s.wrapper}>
          <ul className={s["movie-list"]}>
            {movie.map(({ id, title, poster_path }) => {
              return (
                <li key={id} className={s["movie-item"]}>
                  <NavLink
                    to={{ pathname: `movies/${id}`, state: { from: location } }}
                  >
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                          : defaultImage
                      }
                      alt={title}
                      className={s["movie-img"]}
                    />
                    <h2 className={s["movie-title"]}>{title}</h2>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};

export default MoviesPage;
