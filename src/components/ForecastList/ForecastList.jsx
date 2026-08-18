import style from "./ForecastList.module.css";
import sprite from "../../images/symbol-defs.svg"
import ReactCountryFlag from "react-country-flag";
import ForecastItem from "../ForecastItem/ForecastItem";

function ForecastList({ citiesList, daysOfWeek, updateWeather, date }) {
  return (
    <section className={style.forecast}>
      <div className="container">
        <ul className={style.forecast_list}>
          {citiesList.map(
            ({ id, main, weather, name, sys, wind, visibility }) => (
              <ForecastItem key={id} main={main} weather={weather} name={name} sys={sys} wind={wind} visibility={visibility} daysOfWeek={daysOfWeek} updateWeather={updateWeather} date={date} />
            ),
          )}
        </ul>
      </div>
    </section>
  );
}

export default ForecastList;
