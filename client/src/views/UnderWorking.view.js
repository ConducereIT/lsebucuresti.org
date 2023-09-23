import React, { useState } from "react";
import Banner from "../components/Banner.component";
import Header from "../components/Header.component";

const UnderWorking = () => {
  const [isCurtainOpen, setCurtainOpen] = useState(false);

  function showTime() {
    var curtain = document.getElementById("curtain");
    curtain.className = "open";

    var scene = document.getElementById("scene");
    scene.className = "expand";

    var starter = document.getElementById("starter");
    starter.className = "fade-out";

    setTimeout(function () {
      starter.style.display = "none";
    }, 2000);
  }

  return (
    <>
      <div
        id="starter"
        onClick={showTime} // Adaugă handler de clic
        style={{ cursor: "pointer" }}
      >
        Apasa aici!
      </div>
      <div id="scene">
        <div id="curtain" className={isCurtainOpen ? "open" : ""}>
          <div>
            <Header />
            <Banner />
          </div>
          <div className="ground"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default UnderWorking;
