const URL = "https://api.worldnewsapi.com/search-news?news-sources=bbc.co.uk&categories=environment&number=4"
// const API_KEY = "99157ff14d304c0eb2f79982665c254b";

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