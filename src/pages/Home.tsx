import React from "react";

import { Header } from "../components/Header";
import { PageForm } from "../components/PageForm";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>{/* <PageForm /> */}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export { Home };
