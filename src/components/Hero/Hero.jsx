import style from "./Hero.module.css";
import sprite from "../../images/symbol-defs.svg";
import Searchbar from "../Searchbar/Searchbar";


function Hero({daysOfWeek, setSearch}) {
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

        <Searchbar setSearch={setSearch} />
      </div>
    </section>
  );
}

export default Hero;
