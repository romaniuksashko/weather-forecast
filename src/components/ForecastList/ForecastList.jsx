import style from "./ForecastList.module.css";
import sprite from "../../images/symbol-defs.svg"
import ReactCountryFlag from "react-country-flag";

function ForecastList({ citiesList }) {
  const date = new Date();

  return (
    <ul className={style.forecast_list}>
      {citiesList.map(({ id, main, weather, name, sys, wind, visibility }) => (
        <li key={id} className={style.forecast_item}>
          <div className={style.forecast_base}>
            <p className={style.forecast_name}>{name}</p>
            <ReactCountryFlag
              countryCode={sys.country}
              className={style.forecast_flag}
            />
          </div>

          <p className={style.forecast_time}>
            {date.getHours()}:{date.getMinutes()}
          </p>

          <button type="button" className={style.forecast_hourly}>
            Hourly forecast
          </button>

          <button type="button" className={style.forecast_weekly}>
            Weekly forecast
          </button>

          <p className={style.forecast_description}>{weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].icon}
            className={style.forecast_img}
          />

          <p className={style.forecast_temperature}>{Math.round(main.temp)}℃</p>
          <svg className={style.forecast_rotate}>
            <use href={`${sprite}#rotate`}></use>
          </svg>
          <svg className={style.forecast_heart}>
            <use href={`${sprite}#heart`}></use>
          </svg>
          <button type="button" className={style.forecast_more}>
            See more
          </button>
          <svg className={style.forecast_trash}>
            <use href={`${sprite}#trash`}></use>
          </svg>
        </li>
      ))}
    </ul>
  );
}

export default ForecastList;
