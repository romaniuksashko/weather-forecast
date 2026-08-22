import { Avatar } from "@mui/material";
import music from "../../images/background-music.mp3";
import sprite from "../../images/symbol-defs.svg";
import { useRef, useState } from "react";
import style from "./UserProfile.module.css";

function UserProfile({ changeProfile }) {
  const audioRef = useRef(null);
  const [isPlayed, setIsPlayed] = useState("Isn't playing");

  const closeOnOverlay = (event) => {
    if (event.target === event.currentTarget) {
      changeProfile();
    }
  }

  const getUserName = () => {
    const userName = localStorage.getItem("userName");

    if (!userName) {
      return;
    }
    return userName.slice(0, 1).toUpperCase();
  };

  // const generateRandomColor = () => {
  //   const numbers =
  // }

  const setPlay = () => {
    audioRef.current.play();
    setIsPlayed("Is playing");
  };

  const setPause = () => {
    audioRef.current.pause();
    setIsPlayed("Isn't playing");
  };

  const onLogOff = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    changeProfile();
  };

  return (
    <div className={style.profile__backdrop} onClick={closeOnOverlay}>
      <div className={style.profile}>
        <div className={style.profile__info}>
          <Avatar id={style.profile__image}>{getUserName()}</Avatar>
          <div className={style.profile__base}>
            <p className={style.profile__name}>
              {localStorage.getItem("userName") || "name"}
            </p>
            <p className={style.profile__email}>
              {localStorage.getItem("userEmail") || "email"}
            </p>
          </div>
        </div>

        <p className={style.profile__song}>
          🎶 Iara's Song - Acoustic Folk Guitar
        </p>
        <p className={style.profile__status}>{isPlayed}</p>

        <ul className={style.profile__list}>
          <li>
            <button
              type="button"
              onClick={setPlay}
              className={style.profile__button}
            >
              <svg className={style.profile__icon}>
                <use href={`${sprite}#play`}></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={setPause}
              className={style.profile__button}
            >
              <svg className={style.profile__icon}>
                <use href={`${sprite}#pause`}></use>
              </svg>
            </button>
          </li>
        </ul>

        <audio
          src={music}
          ref={audioRef}
          loop
          className={style.profile__player}
        />
        <button
          type="button"
          onClick={onLogOff}
          className={style.profile__logoff}
        >
          Log off
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
// sx={{ bgcolor: deepOrange[500] }}
