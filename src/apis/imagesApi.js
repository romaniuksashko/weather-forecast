const API_KEY = "54040922-56599c45c0f5ccf0640cb4781";

export async function fetchImages() {
  const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=nature&orientation=horizontal&per_page=10`);
  const data = await response.json();
  return data.hits;
}