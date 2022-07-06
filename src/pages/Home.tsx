import React from "react";

import { Header } from "../components/Header";
import { PageForm } from "../components/PageForm";
import { FooterLinks } from "../components/FooterLinks";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>{/* <PageForm /> */}</main>
      <footer>
        <FooterLinks />
        <Footer />
      </footer>
    </>
  );
};

export { Home };
