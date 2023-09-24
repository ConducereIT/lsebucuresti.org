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
      <Footer />
    </>
  );
};

export default Facultate;
