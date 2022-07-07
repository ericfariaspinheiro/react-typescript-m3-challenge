import React from "react";

import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles["newsletter"]}>
      <div className={styles["newsletter-warpper"]}>
        <h3>ASSINE NOSSA NEWSLETTER</h3>
        <form action="" className={styles["wrapper-form"]}>
          <input type="text" className={styles["form-input"]} placeholder="E-mail" />
          <button className={styles["form-button"]}>ENVIAR</button>
        </form>
      </div>
    </section>
  );
};

export { Newsletter };
