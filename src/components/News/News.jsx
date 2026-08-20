import style from "./News.module.css";
import { fetchNews } from "../../apis/newsApi";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

function News() {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(false);

  useEffect(() => {
    setLoadingNews(true);
    const renderNews = async () => {
      try {
        const newsArray = await fetchNews();
        setNews(newsArray);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingNews(false);
      }
    };
    renderNews();
  }, []);

  const openWindowNews = () => {
    window.open("https://www.bbc.com/future-planet");
  }

  return (
    <section className={style.news}>
      <div className="container">
        <h2 className={style.news_title}>Nature news in the world</h2>
        {loadingNews && <Loader/>}
        <ul className={style.news_list}>
          {news.map(({ id, title, url, image, category }) => (
            <li key={id} className={style.news_item}>
              <a href={url} target="_blank" className={style.news_link}>
                <img src={image} alt={category} className={style.news_image} />
                <h3 className={style.news_subtitle}>{title}</h3>
              </a>
            </li>
          ))}
        </ul>
        <button type="button" className={style.news_button} onClick={openWindowNews}>See more</button>
      </div>
    </section>
  );
}

export default News;
