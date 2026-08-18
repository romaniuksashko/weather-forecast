import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import style from "./ImagesList.module.css";
import { useEffect, useState } from "react";
import { fetchImages } from "../../apis/imagesApi";
import sprite from "../../images/symbol-defs.svg"

function ImagesList() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages();
      setImages(data);
    };

    getImages();
  }, []);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <section className={style.images}>
      <div className="container">
        <div className={style.embla}>
          <div className={style.embla__viewport} ref={emblaRef}>
            <ul className={style.embla__container}>
              {images.map(({ id, largeImageURL, tags }) => (
                <li className={style.embla__slide} key={id}>
                  <img src={largeImageURL} alt={tags} className={style.img} />
                </li>
              ))}
            </ul>
          </div>

          <div className={style.images_buttons}>
            <button className={style.embla__prev} onClick={goToPrev}>
              <svg className={style.svg_left}>
                <use href={`${sprite}#arrow-right`}></use>
              </svg>
              Scroll to prev
            </button>
            <button className={style.embla__next} onClick={goToNext}>
              Scroll to next
              <svg className={style.svg_right}>
                <use href={`${sprite}#arrow-right`}></use>
              </svg>
            </button>            
          </div>


        </div>
      </div>
    </section>
  );
}

export default ImagesList;
