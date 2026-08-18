import { useState, useEffect } from "react";
import "./App.css";
import { fetchLocations, fetchWeather } from "./apis/weatherApi";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Menu from "./components/Menu/Menu";
import Modal from "./components/Modal/Modal";
import ForecastList from "./components/ForecastList/ForecastList";
import ImagesList from "./components/ImagesList/ImagesList";

function App() {
  const [menu, setMenu] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [citiesList, setCitiesList] = useState([]);
  const [date, setDate] = useState(new Date())

  const [search, setSearch] = useState("");
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const changeModal = () => {
    setSignUp((prev) => !prev);
  };

  const changeMenu = () => {
    setMenu((prev) => !prev);
  };

  useEffect(() => {
    if (!search.trim()) {
      return;
    }

    const getCoordinates = async () => {
      try {
        const city = await fetchLocations(search);
        const cityWeather = await fetchWeather(city.name, city.lat, city.lon);
        setCitiesList((prev) => [...prev, cityWeather]);
      } catch (error) {
        console.log(error);
      }
    };

    getCoordinates();
  }, [search]);

  const updateWeather = async (name) => {
    setDate(new Date())
    const location = await fetchLocations(name);

    const locationWeather = await fetchWeather(name, location.lat, location.lon);

    setCitiesList((prev) => prev.map(item => item.id === locationWeather.id ? locationWeather : item));
  }

  return (
    <>
      <Header menu={menu} changeMenu={changeMenu} changeModal={changeModal} />

      <Hero daysOfWeek={daysOfWeek} setSearch={setSearch} />
      <ForecastList citiesList={citiesList} daysOfWeek={daysOfWeek} updateWeather={updateWeather} date={date} />
      <News />
      <ImagesList />

      <Footer />
      {menu && <Menu changeModal={changeModal} changeMenu={changeMenu} />}
      {signUp && <Modal changeModal={changeModal} />}
    </>
  );
}

export default App;
