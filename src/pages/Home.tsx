import React from "react";

import { Header } from "../components/Header/Header";
import { MainSection } from "../components/Main/MainSection";
import { Newsletter } from "../components/Footer/Newsletter";
import { FooterLinks } from "../components/Footer/FooterLinks";
import { Footer } from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <MainSection />
      </main>
      <footer>
        <Newsletter />
        <FooterLinks />
        <Footer />
      </footer>
    </>
  );
};

export { Home };
