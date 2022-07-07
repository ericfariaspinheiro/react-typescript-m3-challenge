import React from "react";

import { SearchBar } from "./SearchBar";

import LogoM3 from "../../arquivos/img/Header/m3-academy-logo.png";
import CloseButton from "../../arquivos/img/Header/close-icon.png";

import styles from "./MobileMenu.module.css";

interface MobileProps {
  mobileMenuStatus: boolean;
  setMobileMenuStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ mobileMenuStatus, setMobileMenuStatus }: MobileProps) => {
  return (
    <nav className={`${styles["mobile-menu"]} ${mobileMenuStatus && styles["is-open"]}`}>
      <div className={styles["menu-header"]}>
        <div className={styles["header-buttons"]}>
          <button className={styles["buttons-logo"]}>
            <img src={LogoM3} alt="Logo M3" />
          </button>
          <button className={styles["buttons-close"]} onClick={() => setMobileMenuStatus(false)}>
            <img src={CloseButton} alt="Logo M3" />
          </button>
        </div>
        <SearchBar />
      </div>

      <ul className={styles["menu-list"]}>
        <li className={styles["list-item"]}>
          <a href="./" title="CURSOS">
            CURSOS
          </a>
        </li>

        <li className={styles["list-item"]}>
          <a href="./" title="SAIBA MAIS">
            SAIBA MAIS
          </a>
        </li>
      </ul>

      <a className={styles["menu-login"]} href="/account">
        ENTRAR
      </a>
    </nav>
  );
};

export { MobileMenu };
