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
      <div className="flex mt-20 md:mx-20 ml-2 ">
        <h1 className=" md:text-4xl text-3xl font-semibold pb-5 text-center tracking-wider">
          Consiliul Executiv
        </h1>
      </div>
      <div className=" bg-slate-50 md:mx-20 rounded-lg">
        <Membrii members={membersCE} grid={5} />
      </div>
      <div className="flex mt-20 md:mx-20 ml-2 ">
        <h1 className=" md:text-4xl text-3xl font-semibold pb-5 text-center tracking-wider">
          Coordonatori
        </h1>
      </div>
      <div className=" bg-slate-50 md:mx-20 rounded-lg">
        <Membrii members={membersCoord} grid={4} />
      </div>
      <div className="flex mt-20 md:mx-20 ml-2 ">
        <h1 className=" md:text-4xl text-3xl font-semibold pb-5 text-center tracking-wider">
          Consilieri de an
        </h1>
      </div>
      <div className=" bg-slate-50 md:mx-20 rounded-lg">
        <Membrii members={membersAn} grid={4} />
      </div>
      <Footer />
    </>
  );
};

export default Echipa;
