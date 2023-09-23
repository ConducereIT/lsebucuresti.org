import React, { useState } from "react";
import Banner from "../components/Banner.component";
import Header from "../components/Header.component";

document.body.addEventListener("onload", focus());
document.addEventListener("keydown", detectSpaceKey);

function detectSpaceKey(event) {
  if (event.keyCode == 13) {
    showTime();
  }
}

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
const UnderWorking = () => {
  return (
    <>
      <div id="starter">press enter</div>
      <div id="scene">
        <div id="curtain">
          <Header />
          <Banner />
          <div className="ground"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default UnderWorking;
