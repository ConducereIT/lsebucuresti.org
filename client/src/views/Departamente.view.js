import React from "react";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import Banner from "../components/Banner.component";
import DepartamenteList from "../components/Departamente/List.component";
import { DepartamenteProps } from "../assets/config/configAboutUS";

const shuffleDepartamente = DepartamenteProps.sort(() => Math.random() - 0.5);

const Departamente = () => {
  return (
    <>
      <Header />
      <DepartamenteList itemArray={shuffleDepartamente} />
      <Footer />
    </>
  );
};

export default Departamente;
