import { useEffect, useState } from "react";
import style from "./Hero.module.css";

function Hero() {
  const [citiesList, setCitiesList] = useState([]);
  const [query, setQuery] = useState("");

  const date = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();

  const denonymFunction = () => {
    if ([11, 12, 13].includes(dayOfMonth)) {
      return "th";
    }

    switch (dayOfMonth) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const onChangeInput = (event) => {
    setQuery(event.target.value);
  };

  const onSearchLocation = (event) => {
    event.preventDefault();
  };

  useEffect(() => {}, [query]);

  return (
    <section className={style.hero}>
      <div className="container">
        <h1 className={style.hero_title}>Weather dashboard</h1>
        <div className={style.hero_mobwrapper}>
          <div className={style.hero_mobline}></div>
          <div className={style.hero_wrapper}>
            <p className={style.hero_description}>
              Create your personal list of favorite cities and always be aware
              of the weather.
            </p>
            <div className={style.hero_line}></div>
            <p className={style.hero_date}>
              {month} {year} {dayOfWeek}, {dayOfMonth}
              <sup>{denonymFunction()}</sup>
            </p>
          </div>
        </div>

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
              <use href="./src/images/symbol-defs.svg#search"></use>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
