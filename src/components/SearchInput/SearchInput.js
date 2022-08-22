import { useState } from "react";
import PropTypes from "prop-types";
import s from "./SearchInput.module.css";

const SearchInput = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    setQuery(e.currentTarget.value.toLowerCase());
    // if (e.currentTarget.name === 'movie') {
    //     setQuery(e.currentTarget.value);
    //  }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      alert("Please enter your correctly query!");
      //  console.log("Please enter your correctly query!");
      return;
    }

    onSubmit(query);
    reset();
  };
  const reset = () => {
    setQuery("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          Found movies:
          <input
            type="text"
            name="movie"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={query}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit" className={s["form-btn"]}>
          Search
        </button>
      </form>
    </>
  );
};
SearchInput.propTypes = { onSubmit: PropTypes.func.isRequired };
export default SearchInput;
