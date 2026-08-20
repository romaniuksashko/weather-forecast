import style from "./ForecastList.module.css";
import ForecastItem from "../ForecastItem/ForecastItem";

function ForecastList({ citiesList, daysOfWeek, updateWeather, date, deleteWeather }) {
  return (
    <section className={style.forecast}>
      <div className="container">
        {citiesList.length !== 0 ? <ul className={style.forecast_list}>
          {citiesList.map(
            ({ id, main, weather, name, sys, wind, visibility }) => (
              <ForecastItem
                key={id}
                id={id}
                main={main}
                weather={weather}
                name={name}
                sys={sys}
                wind={wind}
                visibility={visibility}
                daysOfWeek={daysOfWeek}
                updateWeather={updateWeather}
                date={date}
                deleteWeather={deleteWeather}
              />
            ),
          )}
        </ul> : <h2>No cards have been added yet :3</h2>}
        
      </div>
    </section>
  );
}

export default ForecastList;