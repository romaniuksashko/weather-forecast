import style from "./ForecastItem.module.css";
import sprite from "../../images/symbol-defs.svg";
import ReactCountryFlag from "react-country-flag";

function ForecastItem({
  id,
  main,
  weather,
  name,
  sys,
  wind,
  visibility,
  daysOfWeek,
  updateWeather,
  date,
  deleteWeather
}) {
  return (
    <li className={style.forecast_item}>
      <div className={style.forecast_base}>
        <p className={style.forecast_name}>{name}</p>
        <ReactCountryFlag
          countryCode={sys.country}
          className={style.forecast_flag}
        />
      </div>

      <p className={style.forecast_time}>
        {String(date.getHours()).padStart(2, "0")}:
        {String(date.getMinutes()).padStart(2, "0")}
      </p>

      <div className={style.forecast_buttons}>
        <button type="button" className={style.forecast_hourly}>
          Hourly forecast
        </button>

        <button type="button" className={style.forecast_weekly}>
          Weekly forecast
        </button>
      </div>

      <div className={style.forecast_date}>
        <p className={style.forecast_year}>
          {String(date.getDate()).padStart(2, "0")}.
          {String(date.getMonth() + 1).padStart(2, "0")}.{date.getFullYear()}
        </p>
        <div className={style.forecast_line}></div>
        <p className={style.forecast_day}>{daysOfWeek[date.getDay()]}</p>
      </div>

      <p className={style.forecast_description}>{weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].icon}
        className={style.forecast_img}
      />

      <p className={style.forecast_temperature}>{Math.round(main.temp)}℃</p>

      <div className={style.forecast_bottom}>
        <div className={style.forecast_functional}>
          <svg
            className={style.forecast_rotate}
            onClick={() => updateWeather(name)}
          >
            <use href={`${sprite}#rotate`}></use>
          </svg>

          <svg className={style.forecast_heart}>
            <use href={`${sprite}#heart`}></use>
          </svg>
        </div>

        <button type="button" className={style.forecast_more}>
          See more
        </button>

        <svg className={style.forecast_trash} onClick={() => deleteWeather(id)}>
          <use href={`${sprite}#trash`}></use>
        </svg>
      </div>
    </li>
  );
}

export default ForecastItem;
