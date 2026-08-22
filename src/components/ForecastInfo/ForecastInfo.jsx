import style from "./ForecastInfo.module.css";
import highTemperature from "../../images/temperature-high.webp";
import normalTemperature from "../../images/temperature-normal.webp";
import lowTemperature from "../../images/temperature-low.webp";
import humidity from "../../images/humidity.webp";
import pressure from "../../images/pressure.webp";
import windImage from "../../images/wind.webp";
import visibilityImage from "../../images/visibility.webp"

function ForecastInfo({ info }) {
  const {main, visibility, wind} = info;

  return (
    <section className={style.info}>
      <div className="container">
        <ul className={style.info__list}>
          <li className={style.info__card}>
            <h3 className={style.info__title}>Feels like</h3>
            <p className={style.info__data}>{main.feels_like} ℃</p>
            <img
              src={main.feels_like >= 15 ? highTemperature : main.feels_like >= 0 ? normalTemperature : lowTemperature}
              alt="temperature"
              className={style.info__image}
            />
          </li>
          <li className={style.info__card}>
            <h3 className={style.info__title}>Min ℃</h3>
            <p className={style.info__data} data-temp="min">
              {main.temp_min} ℃
            </p>
            <h3 className={style.info__title}>Max ℃</h3>
            <p className={style.info__data} data-temp="max">
              {main.temp_max} ℃
            </p>
          </li>
          <li className={style.info__card}>
            <h3 className={style.info__title}>Humidity</h3>
            <p className={style.info__data}>{main.humidity}%</p>
            <img src={humidity} alt="humidity" className={style.info__image} />
          </li>
          <li className={style.info__card}>
            <h3 className={style.info__title}>Pressure</h3>
            <p className={style.info__data}>{main.pressure} Pa</p>
            <img src={pressure} alt="pressure" className={style.info__image} />
          </li>
          <li className={style.info__card}>
            <h3 className={style.info__title}>Wind speed</h3>
            <p className={style.info__data}>{wind.speed} m/s</p>
            <img src={windImage} alt="wind" className={style.info__image} />
          </li>
          <li className={style.info__card}>
            <h3 className={style.info__title}>Visibility</h3>
            <p className={style.info__data}>{visibility/1000} km</p>
            <img
              src={visibilityImage}
              alt="visibility"
              className={style.info__image}
            />
          </li>
        </ul>

      </div>
    </section>
  );
}

export default ForecastInfo;
