import React from "react";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import AboutUs from "../components/AboutUs.component";
import { DepartamenteProps } from "../assets/config/configAboutUS";
const Departamente = () => {
  return (
    <>
      <Header />
      <AboutUs itemArray={DepartamenteProps} />
      <Footer />
    </>
  );
};

export default Departamente;
