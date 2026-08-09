import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <a href="./index.html">
          <img src="../../src/images/logo.png" alt="logo" />
        </a>
        <div>
          <h3>Address</h3>
          <p>Svobody str. 35 Kyiv Ukraine</p>
        </div>
        <div>
          <h3>Contacts</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/">
                <svg>
                  <use href="../../src/images/symbol-defs.svg#instagram"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <svg>
                  <use href="../../src/images/symbol-defs.svg#facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/">
                <svg>
                  <use href="../../src/images/symbol-defs.svg#whatsapp"></use>
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
