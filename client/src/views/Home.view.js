import React from "react";

//Components
import Header from "../components/Header.component";
import Banner from "../components/Banner.component";
import Stats from "../components/Stats.component";
import Footer from "../components/Footer.component";
import MapCards from "../components/MapCards.component";
import Sponsor from "../components/Sponsor";
//Config
import {
  styledObjectExample,
  mappingObjectExample,
} from "../assets/config/config";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <MapCards
        styledObject={styledObjectExample}
        mappingObject={mappingObjectExample}
      />
      <Stats />
      <Sponsor />
      <Footer />
    </>
  );
}
