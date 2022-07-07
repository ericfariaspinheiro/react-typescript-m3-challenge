import React from "react";

import { About } from "./About";
import { PageForm } from "./PageForm";

import Home from "../../arquivos/img/Main/home-icon.png";
import Arrow from "../../arquivos/img/Main/arrow-icon.png";

import styles from "./MainSection.module.css";

const MainSection = () => {
  return (
    <div className={styles["main-informations"]}>
      <div className={styles["informations-icons"]}>
        <img src={Home} alt="Home Icon" />
        <img src={Arrow} alt="Arrow Icon" />
        <span className={styles["icons-title"]}>INSTITUCIONAL</span>
      </div>

      <div className={styles["informations-title"]}>
        <h2>INSTITUCIONAL</h2>
      </div>

      <div className={styles["informations-content"]}>
        <div className={styles["content-menu"]}>
          <ul className={styles["menu-list"]}>
            <li className={styles["list-item"]}>
              <button>Sobre</button>
            </li>
            <li className={styles["list-item"]}>
              <button>Forma de Pagamento</button>
            </li>
            <li className={styles["list-item"]}>
              <button>Entrega</button>
            </li>
            <li className={styles["list-item"]}>
              <button>Troca e Devolução</button>
            </li>
            <li className={styles["list-item"]}>
              <button>Segurança e Privacidade</button>
            </li>
            <li className={styles["list-item"]}>
              <button>Contato</button>
            </li>
          </ul>
        </div>

        <section className={styles["content-article"]}>
          <PageForm />
        </section>
      </div>
    </div>
  );
};

export { MainSection };
