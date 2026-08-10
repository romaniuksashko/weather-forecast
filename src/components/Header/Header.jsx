import style from "./Header.module.css"

function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.nav}>
          <a href="./index.html">
            <img
              src="./src/images/logo.png"
              alt="logo"
              className={style.header_image}
            />
          </a>          
          <ul className={style.header_list}>
            <li>
              <a href="#" className={style.header_link}>
                Who we are
              </a>
            </li>
            <li>
              <a href="#footer" className={style.header_link}>
                Contacts
              </a>
            </li>
            <li>
              <a href="#menu" className={style.header_link}>
                Menu
              </a>
            </li>
          </ul>
        </nav>
        <div className={style.header_flex}>
          <button type="button" className={style.header_button}>
            Sign up
          </button>
          <svg className={style.header_user}>
            <use href="./src/images/symbol-defs.svg#user"></use>
          </svg>
        </div>

      </div>
    </header>
  );
}

export default Header;
