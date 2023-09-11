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
      {mappingObjectExample.map((card, index) => {
        return (
          <CardView
            key={index}
            styleCard={`${design.style}`}
            ImgSrc={card.ImgSrc}
            ImgAlt={card.ImgAlt}
            CardHeaderStyle={`${design.CardHeaderStyle}`}
            CardBodyStyle={`${design.CardBodyStyle}`}
            CardTitle={card.CardTitle}
            CardText={card.CardText}
            FooterActive={design.FooterActive}
            FooterText={card.FooterText}
            FooterStyle={`${design.FooterStyle}`}
          />
        );
      })}
    </div>
  );
};

export default MapCards;
