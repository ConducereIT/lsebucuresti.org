import React from "react";
import CardView from "./Card.component";

const MapCards = ({ styledObject, mappingObjectExample }) => {
  const design = {
    styleComponent: styledObject.styleComponent,
    style: styledObject.CardStyle,
    CardHeaderStyle: styledObject.CardHeaderStyle,
    CardBodyStyle: styledObject.CardBodyStyle,
    FooterActive: styledObject.FooterActive,
    FooterStyle: styledObject.style,
  };

  return (
    <div className={`${design.styleComponent}`}>
      <CardView
        styleCard={`${design.style}`}
        CardHeaderStyle={`${design.CardHeaderStyle}`}
        ImgSrc={`${design.ImgSrc}`}
        ImgAlt={`${design.ImgAlt}`}
        CardBodyStyle={`${design.CardBodyStyle}`}
        CardTitle={`${design.CardTitle}`}
        CardText={`${design.CardText}`}
        FooterActive={true}
        FooterText={`${design.FooterText}`}
        FooterStyle={`${design.FooterStyle}`}
      />
    </div>
  );
};

export default MapCards;
