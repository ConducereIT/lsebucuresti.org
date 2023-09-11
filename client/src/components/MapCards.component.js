import React from "react";
import CardView from "./Card.component";

const Carousel = ({ styledObject }) => {
  const design = {
    styleComponent: styledObject.styleComponent,
    style: styledObject.CardStyle,
    CardHeaderStyle: styledObject.CardHeaderStyle,
    ImgSrc: styledObject.ImgSrc,
    ImgAlt: styledObject.ImgAlt,
    CardBodyStyle: styledObject.CardBodyStyle,
    CardTitle: styledObject.CardTitle,
    CardText: styledObject.CardText,
    FooterActive: styledObject.FooterActive,
    FooterText: styledObject.FooterText,
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

export default Carousel;
