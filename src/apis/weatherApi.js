const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchLocations(query) {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=3&appid=${API_KEY}`);
  return response.json();
}