import React from "react";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import AboutUs from "../components/AboutUs.component";
import { DespreNoiProps } from "../assets/config/configAboutUS";
const Despre = () => {
  return (
    <>
      <Header />
      <AboutUs itemArray={DespreNoiProps} />
      <Footer />
    </>
  );
};

export default Despre;
