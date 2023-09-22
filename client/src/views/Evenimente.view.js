import React, { useEffect } from "react";

// Components
import MapCards from "../components/MapCards.component";
import Header from "../components/Header.component";
import Banner from "../components/Banner.component";

// Config
import {
  styledObjectTest,
  mappingObjectTest,
  styledObjectEvenimente,
  mappingObjectEvenimente,
} from "../assets/config/config";
import Footer from "../components/Footer.component";

const Evenimente = () => {
  useEffect(() => {
    document.title = "Evenimente";
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <MapCards
        styledObject={styledObjectEvenimente}
        mappingObject={mappingObjectEvenimente}
        footerOnClick={() => {}}
      />
      <Footer />
    </>
  );
};

export default Evenimente;
