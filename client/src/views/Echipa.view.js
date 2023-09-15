import React from "react";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import Membrii from "../components/Membrii.component";
import { membersCE } from "../assets/config/configCE";
import { membersCoord } from "../assets/config/configCoord";
import { membersAn } from "../assets/config/configAn";

const Echipa = () => {
  return (
    <>
      <Header />
      <Membrii title="Consiliul Executiv" members={membersCE} grid={5} />
      <Membrii title="Coordonatori" members={membersCoord} grid={4} />
      <Membrii title="Consilieri de an" members={membersAn} grid={4} />
      <Footer />
    </>
  );
};

export default Echipa;
