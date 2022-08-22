import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s["navigation"]}>
      <ul className={s["navigation__list"]}>
        <li className={s["navigation__item"]}>
          <NavLink
            to="/"
            className={s["navigation__link"]}
            activeClassName={s["navigation__link--current"]}
            exact
          >
            Home
          </NavLink>
        </li>
        <li className={s["navigation__item"]}>
          <NavLink
            to="/movies"
            className={s["navigation__link"]}
            activeClassName={s["navigation__link--current"]}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
