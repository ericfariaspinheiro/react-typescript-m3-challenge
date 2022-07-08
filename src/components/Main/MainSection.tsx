import React, { useState } from "react";

import { About } from "./About";
import { PageForm } from "./PageForm";

import ScrollUp from "../../arquivos/img/Footer/arrow-up-icon.png";
import Whatsapp from "../../arquivos/img/Footer/whatsapp-icon.png";
import Home from "../../arquivos/img/Main/home-icon.png";
import Arrow from "../../arquivos/img/Main/arrow-icon.png";

import styles from "./MainSection.module.css";

interface Iobj {
  sobre: JSX.Element;
  pagamento: JSX.Element;
  entrega: JSX.Element;
  trocaDevolucao: JSX.Element;
  seguroPrivacidade: JSX.Element;
  contato: JSX.Element;
}

const obj: Iobj = {
  sobre: <About />,
  pagamento: <div></div>,
  entrega: <div></div>,
  trocaDevolucao: <div></div>,
  seguroPrivacidade: <div></div>,
  contato: <PageForm />,
};

const MainSection = () => {
  const [page, setPage] = useState("sobre");

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
              <button
                onClick={() => setPage("sobre")}
                className={page === "sobre" ? styles["item-selected"] : styles["item-nonSelected"]}
              >
                Sobre
              </button>
            </li>
            <li className={styles["list-item"]}>
              <button
                onClick={() => setPage("pagamento")}
                className={
                  page === "pagamento" ? styles["item-selected"] : styles["item-nonSelected"]
                }
              >
                Forma de Pagamento
              </button>
            </li>
            <li className={styles["list-item"]}>
              <button
                onClick={() => setPage("entrega")}
                className={
                  page === "entrega" ? styles["item-selected"] : styles["item-nonSelected"]
                }
              >
                Entrega
              </button>
            </li>
            <li className={styles["list-item"]}>
              <button
                onClick={() => setPage("trocaDevolucao")}
                className={
                  page === "trocaDevolucao" ? styles["item-selected"] : styles["item-nonSelected"]
                }
              >
                Troca e Devolução
              </button>
            </li>
            <li className={styles["list-item"]}>
              <button
                onClick={() => setPage("seguroPrivacidade")}
                className={
                  page === "seguroPrivacidade"
                    ? styles["item-selected"]
                    : styles["item-nonSelected"]
                }
              >
                Segurança e Privacidade
              </button>
            </li>
            <li className={styles["list-item"]}>
              <button
                onClick={() => setPage("contato")}
                className={
                  page === "contato" ? styles["item-selected"] : styles["item-nonSelected"]
                }
              >
                Contato
              </button>
            </li>
          </ul>
        </div>

        <section className={styles["content-article"]}>{obj[page as keyof typeof obj]}</section>

        <div className={styles["informations-nav"]}>
          <button>
            <img src={ScrollUp} alt="Scrow To The Top Icon" />
          </button>
          <button>
            <img src={Whatsapp} alt="Whatsapp Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { MainSection };
