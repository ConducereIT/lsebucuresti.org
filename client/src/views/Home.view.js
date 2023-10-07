import React, { useEffect } from "react";

//Components
import Header from "../components/Header.component";
import Banner from "../components/Banner.component";
import Stats from "../components/Stats.component";
import Footer from "../components/Footer.component";
//Config
import videoBanner from "../assets/video/videoBanner.mp4";
import LseBanner from "../assets/img/LseBanner.webp";
import { slides } from "../assets/config/configAlbum";

import About from "../components/About.component";
import Album from "../components/Album.component";

export default function Home() {
  useEffect(() => {
    document.title = "Liga Studenților Electroniști";
  }, []);
  return (
    <>
      <Header />
      <Banner
        firstTitle={"Liga Studenților"}
        secondTitle={"Electroniști"}
        video={videoBanner}
        LseBanner={LseBanner}
        maiputernici={true}
      />
      <About />
      <Stats />
      <Album slides={slides} />
      {/*<Sponsor />*/}
      <Footer />
    </>
  );
}
