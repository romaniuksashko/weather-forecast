import style from "./Menu.module.css";
import { useEffect, useState } from "react";

function Menu() {
  // const [news, setNews] = useState([]);

  return (
    <div className={style.menu_overlay}>
      <div className={style.menu_background}>
        <div className="container">
        <ul>
          <li>
            <a href="#" className={style.menu_link}>Who we are</a>
          </li>
          <li>
            <a href="#" className={style.menu_link}>Contacts</a>
          </li>
          <li>
            <a href="#" className={style.menu_link}>Menu</a>
          </li>
        </ul>
        <div className={style.menu_flex}>
          <svg className={style.menu_user}>
            <use href="./src/images/symbol-defs.svg#user"></use>
          </svg>
          <button type="button" className={style.menu_button}>
            Sign up
          </button>          
        </div>          
        </div>

      </div>
    </div>
  );
}

export default Menu;
