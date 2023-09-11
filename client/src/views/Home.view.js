import React from "react";

//Components
import Header from "../components/Header.component";
import Banner from "../components/Banner.component";
import Stats from "../components/Stats.component";
import Footer from "../components/Footer.component";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Stats />
      <Footer />
    </>
  );
}
