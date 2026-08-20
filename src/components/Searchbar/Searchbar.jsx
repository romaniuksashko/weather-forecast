import { useState } from "react";
import sprite from "../../images/symbol-defs.svg";
import style from "./Searchbar.module.css";

function Searchbar({ setSearch }) {
  const [query, setQuery] = useState("");

  const onChangeInput = (event) => {
    setQuery(event.target.value);
  };

  const onSearchLocation = (event) => {
    event.preventDefault();

    setSearch(query);
  };

  return (
    <form className={style.hero_form} onSubmit={onSearchLocation}>
      <input
        type="text"
        placeholder="Search location(city, country code)..."
        className={style.hero_input}
        onChange={onChangeInput}
        value={query}
      />
      <button type="submit" className={style.hero_button}>
        <svg className={style.hero_svg}>
          <use href={`${sprite}#search`}></use>
        </svg>
      </button>
    </form>
  );
}

export default Searchbar;
