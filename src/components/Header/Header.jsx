import style from "./Header.module.css"

function Header({ menu, changeMenu, changeModal }) {
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
          <button
            type="button"
            className={style.header_button}
            onClick={changeModal}
          >
            Sign up
          </button>
          <svg className={style.header_user}>
            <use href="./src/images/symbol-defs.svg#user"></use>
          </svg>
        </div>

        <button
          type="button"
          onClick={changeMenu}
          className={style.header_menu}
        >
          Menu
          {menu && (
            <svg className={style.header_arrowright}>
              <use href="./src/images/symbol-defs.svg#arrow-right"></use>
            </svg>
          )}
          {!menu && (
            <svg className={style.header_arrowdown}>
              <use href="./src/images/symbol-defs.svg#arrow-down"></use>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
