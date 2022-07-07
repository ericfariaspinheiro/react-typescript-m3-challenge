import React, { useState } from "react";

import { MobileMenu } from "./MobileMenu";
import { SearchBar } from "./SearchBar";

import styles from "./Header.module.css";

import LogoM3 from "../../arquivos/img/Header/m3-academy-logo.png";
import Cart from "../../arquivos/img/Header/cart-icon.png";

import MobileIcon from "../../arquivos/img/Header/mobile-menu-icon.png";

const Header = () => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  return (
    <header className={styles["header"]}>
      <MobileMenu mobileMenuStatus={mobileMenuStatus} setMobileMenuStatus={setMobileMenuStatus} />
      <div className={styles["header-top"]}>
        <div className={styles["header-top__mobile"]}>
          <button onClick={() => setMobileMenuStatus(true)}>
            <img src={MobileIcon} alt="Mobile Icon" />
          </button>
        </div>

        <div className={styles["header-top__logo"]}>
          <a href="./">
            <img src={LogoM3} alt="Logo M3 Academy" />
          </a>
        </div>

        <div className={styles["top-search-desktop"]}>
          <SearchBar />
        </div>

        <div className={styles["header-top__user"]}>
          <button className={styles["user__login"]}>ENTRAR</button>
          <i className={styles["user__shoppingCart"]}>
            <img src={Cart} alt="" />
          </i>
        </div>
      </div>

      <div className={styles["divisor"]}></div>

      <div className={styles["header-bottom"]}>
        <div className={styles["top-search-mobile"]}>
          <SearchBar />
        </div>
        <ul className={styles["header-ul"]}>
          <li className={styles["header-ul__li"]}>
            <a href="./" className={styles["li__text"]}>
              CURSOS
            </a>
          </li>
          <li className={styles["header-ul__li"]}>
            <a href="./" className={styles["li__text"]}>
              SAIBA MAIS
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Header };
