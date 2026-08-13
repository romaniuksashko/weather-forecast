const URL = "https://api.worldnewsapi.com/search-news?language=en&news-sources=bbc.com&categories=environment&number=4"
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function fetchNews() {
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "x-api-key": API_KEY,
    }
  });

  if (!response.ok) {
    throw new Error(`Error! ${response.status}`)
  }
  const data = await response.json();
  return data.news
}