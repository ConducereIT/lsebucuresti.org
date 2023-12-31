import videoApv from "../video/apv.mp4";
import videoLan from "../video/lanparty.mp4";
import videoSimulare2022 from "../video/simulare2022.mp4";
import videoLetsDance from "../video/letsdance.mp4";
import videoTreasureHunt from "../video/treasurehunt.mp4";
import robo from "../video/robo.mp4";
import React from "react";

import LseBanner from "../img/LseBanner.webp";

export const configEvenimente = [
  {
    video: videoApv,
    LseBanner: LseBanner,
    firstTitle: "Aleargă",
    secondTitle: "pentru Viață",
    maiputernici: true,
  },
  {
    video: videoLan,
    LseBanner: LseBanner,
    firstTitle: "",
    secondTitle: "",
    maiputernici: false,
  },
  {
    video: videoSimulare2022,
    LseBanner: LseBanner,
    firstTitle: "Simularea",
    secondTitle: "Admiterii 2022",
    maiputernici: true,
  },
  {
    video: videoLetsDance,
    LseBanner: LseBanner,
    firstTitle: "",
    secondTitle: "",
    maiputernici: false,
  },
  {
    video: videoTreasureHunt,
    LseBanner: LseBanner,
    firstTitle: "Treasure",
    secondTitle: "Hunt",
    maiputernici: true,
  },
  {
    video: robo,
    LseBanner: LseBanner,
    firstTitle: "",
    secondTitle: "",
    maiputernici: false,
  },
];

export const titleFirstEvenimente = "ROBOCHALLENGE";
export const descriptionFirstEvenimente = (
  <p className="text-xl md:text-xl text-left opacity-90 md:pr-8">
    Robochallenge este o competiţie de robotică, care se adresează în special
    studenţilor pasionaţi de partea practică a unui proiect, dar şi celor
    dornici să înveţe mai mult. Concursul este adresat atât începătorilor, cât
    şi avansaţilor, dar şi pasionaţilor de robotică. Concursul vine ca o
    completare la partea teoretică ce se învaţă în cadrul facultăţii, fiind
    modul prin care studenţii pot face ceva plăcut şi util folosind cunoştinţele
    teoretice.{" "}
  </p>
);
export const secondTitleEvenimente = "ALEARGĂ PENTRU VIAȚĂ";
export const secondDescriptionEvenimente = (
  <div>
    <p className="text-xl md:text-xl text-left opacity-90 md:pr-8">
      ”Aleargă Pentru Viață” este un cross caritabil ce atrage atenția opiniei
      publlice asupra problemelor de sănătate cu care se confruntă românii. O
      campanie în care mișcare și alimentația echilibrată sunt obligatorii
      pentru sănătate. Sloganul campaniei este ”Mișcare Oriunde Oricând Oricum”.
      LSE, prin energia debordantă a voluntarilor, luptă pentru cauzele și
      scopurile caritabile susținute prin intermediul acestui eveniment de mai
      bine de 10 ani.
    </p>
  </div>
);
