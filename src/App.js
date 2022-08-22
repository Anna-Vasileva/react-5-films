import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
);
const NotFoundView = lazy(() =>
  import(
    "./views/NotFoundView/NotFoundView" /* webpackChunkName: "NotFoundView" */
  )
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            {/* <section> */}
            <HomePage />
            {/* </section> */}
          </Route>
          <Route path="/movies" exact>
            {/* <section> */}
            <MoviesPage />
            {/* </section> */}
          </Route>
          <Route path="/movies/:movieId">
            {/* <section> */}
            <MovieDetailsPage />
            {/* </section> */}
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
