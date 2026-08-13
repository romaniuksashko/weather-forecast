import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer_flex}>
          <a href="./index.html">
            <img src="./src/images/logo.png" alt="logo" className={style.footer_logo} />
          </a>
          <div>
            <h3 className={style.footer_title}>Address</h3>
            <p className={style.footer_address}>Svobody str. 35 Kyiv<br/> Ukraine</p>
          </div>
        </div>

        <div>
          <h3 className={style.footer_title} data-title="contacts">Contacts</h3>
          <ul className={style.footer_svglist}>
            <li>
              <a href="https://www.instagram.com/">
                <svg className={style.footer_svg}>
                  <use href="./src/images/symbol-defs.svg#instagram"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <svg className={style.footer_svg}>
                  <use href="./src/images/symbol-defs.svg#facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/">
                <svg className={style.footer_svg}>
                  <use href="./src/images/symbol-defs.svg#whatsapp"></use>
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
