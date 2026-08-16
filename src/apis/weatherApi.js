const API_KEY = "f3432e6120a0e1b568f5d39daf23704d";

export async function fetchLocations(query) {
  const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=3&appid=${API_KEY}`);
  const data = await response.json();
  return {
    lat: data[0].lat,
    lon: data[0].lon
  }
}

export async function fetchWeather(lat, lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
  return response.json();
}

export async function fetchTimeline(lat, lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  return response.json();
}