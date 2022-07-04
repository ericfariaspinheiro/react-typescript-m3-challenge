import React from "react";
import LogoM3 from "../arquivos/img/m3-academy-logo.png";
import Cart from "../arquivos/img/cart-icon.png";
import Magnifier from "../arquivos/img/magnifier-icon.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-wrapper"]}>
        <div className={styles["header-top"]}>
          <div className={styles["header-top__logo"]}>
            <a href="#">
              <img src={LogoM3} alt="Logo M3 Academy" />
            </a>
          </div>

          <div className={styles["header-top__search"]}>
            <input type="text" className={styles["search__input"]} placeholder="Buscar..." />
            <i className={styles["search__magnifier"]}>
              <img src={Magnifier} alt="" />
            </i>
          </div>

          <div className={styles["header-top__user"]}>
            <button className={styles["user__login"]}>ENTRAR</button>
            <i className={styles["user__shoppingCart"]}>
              <img src={Cart} alt="" />
            </i>
          </div>
        </div>
      </div>

      <div className={styles["divisor"]}></div>

      <div className={styles["header-wrapper"]}>
        <ul className={styles["header-ul"]}>
          <li className={styles["header-ul__li"]}>
            <a href="" className={styles["li__text"]}>
              CURSOS
            </a>
          </li>
          <li className={styles["header-ul__li"]}>
            <a href="" className={styles["li__text"]}>
              SAIBA MAIS
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Header };
