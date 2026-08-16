import style from "./Menu.module.css";
import sprite from "../../images/symbol-defs.svg";
import { useEffect, useState } from "react";

function Menu({changeModal,changeMenu}) {
  const closeMenu = (event) => {
    if (event.target === event.currentTarget) {
      changeMenu();
    }
  }

  return (
    <div className={style.menu_overlay} onClick={closeMenu} >
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
            <use href={`${sprite}#user`}></use>
          </svg>
          <button type="button" className={style.menu_button} onClick={changeModal}>
            Sign up
          </button>          
        </div>          
        </div>

      </div>
    </div>
  );
}

export default Menu;
