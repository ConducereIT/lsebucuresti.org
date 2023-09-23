import React, { useState } from "react";

import Header from "../components/Header.component";
import Banner from "../components/Banner.component";

//images

import CortinaDeschisa from "../assets/img/Cortina/deschis.png";

const UnderWorking = () => {
  // Starea locală pentru a urmări dacă div-ul este pe hover sau nu
  const [isHovered, setIsHovered] = useState(false);

  // Funcție pentru a schimba starea pe hover
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  // Imaginea de fundal pentru div
  const backgroundImage = isHovered ? `url(${CortinaDeschisa})` : "url()";

  // Stilurile CSS pentru div
  const divStyle = {
    width: "auto",
    height: "auto",
    background: backgroundImage,
    backgroundSize: "cover",
    transition: " 0.3s ease-in-out",
  };

  return (
    <div
      className="hover-change-background"
      style={divStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Header />
      <Banner />
    </div>
  );
};

export default UnderWorking;
