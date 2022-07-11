import React from "react";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { newsletter } from "../../schema/FormSchema";

import styles from "./Newsletter.module.css";

interface IFormikValues {
  email: string;
}

const initialValues: IFormikValues = {
  email: "",
};

const Newsletter = () => {
  const handleFormikSubmit = (
    values: IFormikValues,
    formikHelpers: FormikHelpers<IFormikValues>
  ) => {
    console.log(values);
    alert("Você começará a receber nossa newsletter :)");
    formikHelpers.resetForm();
  };

  return (
    <section className={styles["newsletter"]}>
      <div className={styles["newsletter-warpper"]}>
        <h3>ASSINE NOSSA NEWSLETTER</h3>
        {/* <form action="" >
          <input type="text" className={styles["form-input"]} placeholder="E-mail" />
          <button className={styles["form-button"]}>ENVIAR</button>
        </form> */}
        <Formik
          initialValues={initialValues}
          validationSchema={newsletter}
          onSubmit={handleFormikSubmit}
        >
          <Form className={styles["wrapper-form"]}>
            <Field
              id="email"
              name="email"
              placeholder="Seu e-mail"
              className={styles["form-input"]}
            />
            <ErrorMessage name="email" component="span" className={styles["error-message"]} />

            <button type="submit" className={styles["form-button"]}>
              CADASTRE-SE
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export { Newsletter };
