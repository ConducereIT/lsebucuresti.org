import React from "react";

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

const Evenimente = () => {
  return (
    <>
      <Header />
      <Banner />
      <MapCards
        styledObject={styledObjectTest}
        mappingObject={mappingObjectTest}
        footerOnClick={() => {}}
        className=""
      />
      <MapCards
        styledObject={styledObjectEvenimente}
        mappingObject={mappingObjectEvenimente}
        footerOnClick={() => {}}
      />
    </>
  );
};

export default Evenimente;
