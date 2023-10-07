import React from "react";
import MapCards from "../MapCards.component";

const Conducere = ({ styledObject, mappingObject, AmprentaSVG }) => {
  return (
    <div className="">
      <MapCards
        styledObject={styledObject}
        mappingObject={mappingObject}
        footerOnClick={() => {}}
        AmprentaSVG={AmprentaSVG}
      />
    </div>
  );
};

export default Conducere;
