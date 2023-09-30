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
import { configEvenimente } from "../assets/config/configEvenimente";

// shaffle configEvenimente

const shuffle = configEvenimente.sort(() => Math.random() - 0.5);

const Evenimente = () => {
  useEffect(() => {
    document.title = "Evenimente";
  }, []);
  return (
    <>
      <Header />
      <Banner video={shuffle[0].video} LseBanner={shuffle[0].LseBanner} firstTitle={shuffle[0].firstTitle} secondTitle={shuffle[0].secondTitle} />
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
