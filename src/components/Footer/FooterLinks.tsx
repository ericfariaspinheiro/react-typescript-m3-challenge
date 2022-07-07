import React from "react";

import Facebook from "../../arquivos/img/FooterLinks/facebook-icon.png";
import Instagram from "../../arquivos/img/FooterLinks/instagram-icon.png";
import Twitter from "../../arquivos/img/FooterLinks/twitter-icon.png";
import Youtube from "../../arquivos/img/FooterLinks/youtube-icon.png";
import Linkedin from "../../arquivos/img/FooterLinks/linkedin-icon.png";
import Plus from "../../arquivos/img/FooterLinks/plus-icon.png";

import styles from "./FooterLinks.module.css";

const FooterLinks = () => {
  return (
    <div className={styles["footer-links"]}>
      <div className={styles["links-text"]}>
        <div className={styles["text-block"]}>
          <h4>INSTITUCIONAL</h4>
          <ul className={styles["block-list"]}>
            <li className={styles["list-item"]}>
              <a href="/quem-somos" className={styles["item-link"]}>
                Quem Somos
              </a>
            </li>

            <li className={styles["list-item"]}>
              <a href="/politica-de-privacidade" className={styles["item-link"]}>
                Política de Privacidade
              </a>
            </li>

            <li className={styles["list-item"]}>
              <a href="/seguranca" className={styles["item-link"]}>
                Segurança
              </a>
            </li>

            <li className={styles["list-item"]}>
              <a href="/seja-um-revendedor" className={styles["item-link"]}>
                <u>Seja um Revendedor</u>
              </a>
            </li>
          </ul>
          <button>
            <img src={Plus} alt="PLus Icon" />
          </button>
        </div>

        <div className={styles["text-block"]}>
          <h4>DÚVIDAS</h4>
          <ul className={styles["block-list"]}>
            <li className={styles["list-item"]}>
              <a href="/entrega" className={styles["item-link"]}>
                Entrega
              </a>
            </li>

            <li className={styles["list-item"]}>
              <a href="/pagamento" className={styles["item-link"]}>
                Pagamento
              </a>
            </li>

            <li className={styles["list-item"]}>
              <a href="/trocas-e-devolucoes" className={styles["item-link"]}>
                Trocas e Devoluções
              </a>
            </li>

            <li className={styles["list-item"]}>
              <a href="/duvidas-frequentes" className={styles["item-link"]}>
                Dúvidas Frequentes
              </a>
            </li>
          </ul>
          <button>
            <img src={Plus} alt="PLus Icon" />
          </button>
        </div>

        <div className={styles["text-block"]}>
          <h4>FALE CONOSCO</h4>
          <ul className={styles["block-list"]}>
            <li className={styles["list-item"]}>
              <span>Atendimento ao Consumidor</span>
            </li>

            <li className={styles["list-item-phone"]}>
              <a href="TEL:1141599504" className={styles["item-link"]}>
                (11) 4159 9504
              </a>
            </li>

            <li className={styles["list-item"]}>
              <span>Atendimento Online</span>
            </li>

            <li>
              <a href="TEL:11994338825" className={styles["item-link"]}>
                (11) 99433-8825
              </a>
            </li>
          </ul>
          <button>
            <img src={Plus} alt="PLus Icon" />
          </button>
        </div>
      </div>

      <div className={styles["links-wrapper-icons"]}>
        <ul className={styles["icons-block"]}>
          <li>
            <a href="./" target="_blank" title="Facebook">
              <img src={Facebook} alt="Facebook Logo" />
            </a>
          </li>

          <li>
            <a href="./" target="_blank" title="Instagram">
              <img src={Instagram} alt="" />
            </a>
          </li>

          <li>
            <a href="./" target="_blank" title="Twitter">
              <img src={Twitter} alt="Twitter Logo" />
            </a>
          </li>

          <li>
            <a href="./" target="_blank" title="Youtube">
              <img src={Youtube} alt="Youtube Logo" />
            </a>
          </li>

          <li>
            <a href="./" target="_blank" title="Linkedin">
              <img src={Linkedin} alt="Linkedin Logo" />
            </a>
          </li>
        </ul>
        <a href="./" target="_blank" className={styles["icons-anchor"]}>
          www.loremipsum.com
        </a>
      </div>
    </div>
  );
};

export { FooterLinks };
