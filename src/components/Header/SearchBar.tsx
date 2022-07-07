import React from "react";

import Magnifier from "../../arquivos/img/Header/magnifier-icon.png";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles["search"]}>
      <input type="text" className={styles["search__input"]} placeholder="Buscar..." />
      <i className={styles["search__magnifier"]}>
        <img src={Magnifier} alt="" />
      </i>
    </div>
  );
};

export { SearchBar };
