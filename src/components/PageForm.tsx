import React from "react";

import styles from "./PageForm.module.css";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import FormSchema from "../schema/FormSchema";

interface IFormikValues {
  nome: string;
  email: string;
  cpf: number;
  birthDate: Date;
  phone: number;
  instagram: string;
}

const initialValues = {
  nome: "",
  email: "",
  cpf: 0,
  birthDate: new Date(),
  phone: 0,
  instagram: "",
};

const PageForm = () => {
  const handleFormikSubmit = (values: IFormikValues) => {
    console.log(values);
  };

  return (
    <div className={styles["form-wrapper"]}>
      <Formik
        onSubmit={handleFormikSubmit}
        initialValues={initialValues}
        validationSchema={FormSchema}
      >
        <Form>
          <h2>PREENCHA O FORMULARIO</h2>
          <div className={styles["form-col"]}>
            <label htmlFor="name">Nome</label>
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
          </div>
          <div className={styles["form-col"]}>
            <label htmlFor="birthDate">Data de Nascimento</label>
            <Field id="birthDate" name="birthDate" placeholder="00 .00 . 00" />
          </div>
          <div className={styles["form-col"]}>
            <label htmlFor="phone">Telefone</label>
            <Field id="phone" name="phone" placeholder="00 .00 . 00" />
          </div>
          <div className={styles["form-col"]}>
            <label htmlFor="instagram">Instagram</label>
            <Field id="instagram" name="instagram" placeholder="@seuuser" />
            <ErrorMessage name="instagram" component="span" className={styles["error-message"]} />
          </div>

          <button type="submit">CADASTRE-SE</button>
        </Form>
      </Formik>
    </div>
  );
};

export { PageForm };
