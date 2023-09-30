import React, { useEffect } from "react";

// Components
import MapCards from "../components/MapCards.component";
import Header from "../components/Header.component";
import Banner from "../components/Banner.component";

import AmprentaSVG from "../assets/img/LogoLiga/icon_logoLSEblue.webp";

// Config
import {
  styledObjectEvenimente,
  mappingObjectEvenimente,
} from "../assets/config/config";
import Footer from "../components/Footer.component";
import { configEvenimente } from "../assets/config/configEvenimente";
import LeftRight from "../components/LeftRight.component";
import {
  descriptionFirstEvenimente,
  secondDescriptionEvenimente,
  secondTitleEvenimente,
  titleFirstEvenimente,
} from "../assets/config/configEvenimente";
import firstPicture from "../assets/img/Evenimente/robo.webp";
import secondPicture from "../assets/img/Evenimente/apv.webp";
// shaffle configEvenimente

const shuffle = configEvenimente.sort(() => Math.random() - 0.5);

const Evenimente = () => {
  useEffect(() => {
    document.title = "Evenimente";
  }, []);
  return (
    <>
      <Header />
      <Banner
        video={shuffle[0].video}
        LseBanner={shuffle[0].LseBanner}
        firstTitle={shuffle[0].firstTitle}
        secondTitle={shuffle[0].secondTitle}
      />

      <LeftRight
        titleFirst={titleFirstEvenimente}
        descriptionFirst={descriptionFirstEvenimente}
        firstPicture={firstPicture}
        secondTitle={secondTitleEvenimente}
        secondDescription={secondDescriptionEvenimente}
        secondPicture={secondPicture}
      />

      <MapCards
        styledObject={styledObjectEvenimente}
        mappingObject={mappingObjectEvenimente}
        footerOnClick={() => {}}
        AmprentaSVG={AmprentaSVG}
      />
      <Footer />
    </>
  );
};

export default Evenimente;
