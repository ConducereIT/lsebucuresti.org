import React, { useEffect } from "react";

//Components
import Header from "../components/Header.component";
import Banner from "../components/Banner.component";
import Stats from "../components/Stats.component";
import Footer from "../components/Footer.component";
import Carousel from "../components/Carousel.component";
import Sponsor from "../components/Sponsor.component";
//Config
import { GallerySlides } from "../assets/config/configCarouselGallery";

import About from "../components/About.component";

export default function Home() {
  useEffect(() => {
    document.title = "Liga Studenților Electroniști";
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Stats />
      <Carousel slides={GallerySlides} />
      <Sponsor />
      <Footer />
    </>
  );
}
