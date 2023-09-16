import React from "react";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import AboutUs from "../components/AboutUs.component";
import { DepartamenteProps } from "../assets/config/configAboutUS";

const shuffleDepartamente = DepartamenteProps.sort(() => Math.random() - 0.5);

const Departamente = () => {
  return (
    <>
      <Header />
      <AboutUs itemArray={shuffleDepartamente} />
      <Footer />
    </>
  );
};

export default Departamente;
