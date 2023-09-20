import React, { useEffect } from "react";

// Components
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import LeftRight from "../components/LeftRight.component";

import LsePhoto from "../assets/img/Evenimente/alteEvenimente_PrezentareaSpecializarilor.jpg";
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
        firstPicture={LsePhoto}
        secondTitle={secondTitleFacultate}
        secondDescription={secondDescriptionFacultate}
        secondPicture={LsePhoto}
      />
      <Footer />
    </>
  );
};

export default Facultate;
