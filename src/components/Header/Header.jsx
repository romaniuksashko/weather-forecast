import style from "./Header.module.css"
import logo from "../../images/logo.png";
import sprite from "../../images/symbol-defs.svg";

function Header({ menu, changeMenu, changeModal }) {
  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.nav}>
          <a href="./index.html">
            <img src={logo} alt="logo" className={style.header_image} />
          </a>
          <ul className={style.header_list}>
            <li>
              <a href="#" className={style.header_link}>
                Who we are
              </a>
            </li>
            <li>
              <a href="#" className={style.header_link}>
                Contacts
              </a>
            </li>
            <li>
              <a href="#" className={style.header_link}>
                Menu
              </a>
            </li>
          </ul>
        </nav>
        <div className={style.header_flex}>
          {localStorage.getItem("userName") ? (
            <p className={style.header_registrated}>
              Hi, {localStorage.getItem("userName")}
            </p>
          ) : (
            <button
              type="button"
              className={style.header_button}
              onClick={changeModal}
            >
              Sign up
            </button>
          )}
          <svg className={style.header_user}>
            <use href={`${sprite}#user`}></use>
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
              <use href={`${sprite}#arrow-right`}></use>
            </svg>
          )}
          {!menu && (
            <svg className={style.header_arrowdown}>
              <use href={`${sprite}#arrow-down`}></use>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
