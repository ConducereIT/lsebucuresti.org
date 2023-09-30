import React, { useEffect } from "react";

// Components
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import LeftRight from "../components/LeftRight.component";

import firstPicture from "../assets/img/Facultate/firstPicture.webp";
import secondPicture from "../assets/img/Facultate/secondPicture.webp";
import {
  titleFirstFacultate,
  descriptionFirstFacultate,
  secondTitleFacultate,
  secondDescriptionFacultate,
} from "../assets/config/configFacultate.js";
import Membrii from "../components/Membrii.component";
import { membersFaculty } from "../assets/config/configFacultate";

const Facultate = () => {
  useEffect(() => {
    document.title = "Facultate";
  }, []);

  return (
    <>
      <Header />
      <LeftRight
        titleFirst={titleFirstFacultate}
        descriptionFirst={descriptionFirstFacultate}
        firstPicture={firstPicture}
        secondTitle={secondTitleFacultate}
        secondDescription={secondDescriptionFacultate}
        secondPicture={secondPicture}
      />
      <div className="flex mt-20 md:mx-20 ml-2">
        <h1 className=" md:text-4xl text-3xl font-bold pb-5 text-center tracking-wider ml-5">
          Conducere
          <hr className=" border-4 border-blue-600 opacity-90 w-2/4 p-1 text-center mt-3" />
        </h1>
      </div>
      <div className=" bg-slate-50 md:mx-20 rounded-lg">
        <Membrii members={membersFaculty} grid={7} />
      </div>
      <Footer />
    </>
  );
};

export default Facultate;
