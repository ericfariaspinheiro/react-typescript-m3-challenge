import React from "react";

import Mastercard from "../arquivos/img/Footer/master-icon.png";
import Visa from "../arquivos/img/Footer/visa-icon.png";
import Diners from "../arquivos/img/Footer/diners-icon.png";
import Elo from "../arquivos/img/Footer/elo-icon.png";
import Hipercard from "../arquivos/img/Footer/hiper-icon.png";
import Paypal from "../arquivos/img/Footer/pagseguro-icon.png";
import Boleto from "../arquivos/img/Footer/boleto-icon.png";
import VtexPci from "../arquivos/img/Footer/vtex-pci-icon.png";
import M3Logo from "../arquivos/img/Footer/m3-white-icon.png";
import VtexLogo from "../arquivos/img/Footer/vtex-white-icon.png";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles["footer-infos"]}>
      <p className={styles["infos-text-desktop"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        <br />
        elit, sed do eiusmod tempor
      </p>
      <div className={styles["infos-labels"]}>
        <ul className={styles["labels-payments"]}>
          <li>
            <img src={Mastercard} alt="Mastercard Logo" />
          </li>
          <li>
            <img src={Visa} alt="Visa Logo" />
          </li>
          <li>
            <img src={Diners} alt="Diners Club Logo" />
          </li>
          <li>
            <img src={Elo} alt="Elo Logo" />
          </li>
          <li>
            <img src={Hipercard} alt="Hipercard Logo" />
          </li>
          <li>
            <img src={Paypal} alt="Paypal Logo" />
          </li>
          <li>
            <img src={Boleto} alt="Boleto Logo" />
          </li>
        </ul>
        <div className={styles["labels-divider"]}></div>
        <ul className={styles["labels-security"]}>
          <li>
            <img src={VtexPci} alt="VTEX PCI Logo" />
          </li>
        </ul>
      </div>

      <p className={styles["infos-text-mobile"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. .
      </p>

      <div className={styles["infos-company"]}>
        <p>Powered by</p>
        <a
          href="https://vtex.com/"
          target="_blank"
          title="VTEX"
          rel="noreferrer"
          className={styles["company-vtex"]}
        >
          <img src={VtexLogo} alt="" />
        </a>

        <p>Developed by</p>
        <a href="https://m3ecommerce.com/" target="_blank" title="M3" rel="noreferrer">
          <img src={M3Logo} alt="" />
        </a>
      </div>
    </section>
  );
};

export { Footer };
