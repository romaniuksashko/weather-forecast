import style from "./Footer.module.css";
import logo from "../../images/logo.png";
import sprite from "../../images/symbol-defs.svg";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer_flex}>
          <a href="./index.html">
            <img
              src={logo}
              alt="logo"
              className={style.footer_logo}
            />
          </a>
          <div>
            <h3 className={style.footer_title}>Address</h3>
            <p className={style.footer_address}>
              Svobody str. 35 Kyiv
              <br /> Ukraine
            </p>
          </div>
        </div>

        <div>
          <h3 className={style.footer_title} data-title="contacts">
            Contacts
          </h3>
          <ul className={style.footer_svglist}>
            <li>
              <a href="https://www.instagram.com/">
                <svg className={style.footer_svg}>
                  <use href={`${sprite}#instagram`}></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <svg className={style.footer_svg}>
                  <use href={`${sprite}#facebook`}></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/">
                <svg className={style.footer_svg}>
                  <use href={`${sprite}#whatsapp`}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
