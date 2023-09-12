import React from "react";
import CardView from "./Card.component";

const MapCards = ({ styledObject, mappingObject }) => {
  const design = {
    styleComponent: styledObject.styleComponent,
    style: styledObject.style,
    CardHeaderStyle: styledObject.CardHeaderStyle,
    CardBodyStyle: styledObject.CardBodyStyle,
    FooterStyle: styledObject.FooterStyle,
  };

  return (
    <div className={`${design.styleComponent}`}>
      {mappingObject.map((card, index) => {
        return (
          <CardView
            key={index}
            styleCard={design.style}
            ImgSrc={card.ImgSrc}
            ImgAlt={card.ImgAlt}
            CardHeaderStyle={design.CardHeaderStyle}
            CardBodyStyle={design.CardBodyStyle}
            CardTitle={card.CardTitle}
            CardText={card.CardText}
            FooterActive={true}
            FooterText={card.FooterText}
            FooterStyle={design.FooterStyle}
          />
        );
      })}
    </div>
  );
};

export default MapCards;
