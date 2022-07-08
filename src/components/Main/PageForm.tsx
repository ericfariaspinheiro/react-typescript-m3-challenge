import React from "react";

import styles from "./PageForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import FormSchema from "../../schema/FormSchema";

interface IFormikValues {
  name: string;
  email: string;
  cpf: string;
  birthDate: string;
  phone: string;
  instagram: string;
  usePolicy: boolean;
}

const initialValues: IFormikValues = {
  name: "",
  email: "",
  cpf: "",
  birthDate: "",
  phone: "",
  instagram: "",
  usePolicy: false,
};

const PageForm = () => {
  const handleFormikSubmit = (values: IFormikValues) => {
    console.log(values);
  };

  return (
    <div className={styles["form-wrapper"]}>
      <h3 className={styles["form-title"]}>PREENCHA O FORMULARIO</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleFormikSubmit}
      >
        <Form>
          <div className={styles["form-col"]}>
            <label htmlFor="name">name</label>
            <Field id="name" name="name" placeholder="Seu nome completo" />
            <ErrorMessage name="name" component="span" className={styles["error-message"]} />
          </div>

          <div className={styles["form-col"]}>
            <label htmlFor="email">E-mail</label>
            <Field id="email" name="email" placeholder="Seu e-mail" />
            <ErrorMessage name="email" component="span" className={styles["error-message"]} />
          </div>

          <div className={styles["form-col"]}>
            <label htmlFor="cpf">CPF</label>
            <Field id="cpf" name="cpf" placeholder="000 000 000 00" />
            <ErrorMessage name="cpf" component="span" className={styles["error-message"]} />
          </div>

          <div className={styles["form-col"]}>
            <label htmlFor="birthDate">Data de Nascimento:</label>
            <Field id="birthDate" name="birthDate" placeholder="00 .00 . 00" />
            <ErrorMessage name="birthDate" component="span" className={styles["error-message"]} />
          </div>
          <div className={styles["form-col"]}>
            <label htmlFor="phone">Telefone:</label>
            <Field id="phone" name="phone" placeholder="00 .00 . 00" />
            <ErrorMessage name="phone" component="span" className={styles["error-message"]} />
          </div>
          <div className={styles["form-col"]}>
            <label htmlFor="instagram">Instagram</label>
            <Field id="instagram" name="instagram" placeholder="@seuuser" />
            <ErrorMessage name="instagram" component="span" className={styles["error-message"]} />
          </div>

          <div className={styles["form-toggle"]}>
            <label htmlFor="usePolicy">
              <span>*</span>Declaro que li e aceito
            </label>
            <Field id="usePolicy" type="checkbox" name="usePolicy" />
            <ErrorMessage name="usePolicy" component="span" className={styles["error-message"]} />
          </div>
          <button type="submit">CADASTRE-SE</button>
        </Form>
      </Formik>
    </div>
  );
};

export { PageForm };
