import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import CardView from "./Card.component";
import { style } from "@motionone/dom";

const MapCards = ({
  styledObject,
  mappingObject,
  footerOnClick,
  AmprentaSVG,
}) => {
  //Animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  const design = {
    styleComponent: styledObject.styleComponent,
    style: styledObject.style,
    AmprentaIsActive: styledObject.AmprentaIsActive,
    CardHeaderStyle: styledObject.CardHeaderStyle,
    CardBodyStyle: styledObject.CardBodyStyle,
    CardTitleStyle: styledObject.CardTitleStyle,
    CardTextStyle: styledObject.CardTextStyle,
    FooterStyle: styledObject.FooterStyle,
    isActive: styledObject.isActive,
  };

  return (
    <>
      <motion.div
        ref={ref}
        id="projects"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className={design.styleComponent}>
          {mappingObject.map((card, index) => {
            return (
              <CardView
                key={index}
                index={index}
                styleCard={design.style}
                ImgSrc={card.ImgSrc}
                ImgAlt={card.ImgAlt}
                CardHeaderStyle={design.CardHeaderStyle}
                AmprentaIsActive={design.AmprentaIsActive}
                CardBodyStyle={design.CardBodyStyle}
                CardTitle={card.CardTitle}
                CardTitleStyle={design.CardTitleStyle}
                CardText={card.CardText}
                CardTextStyle={design.CardTextStyle}
                FooterActive={design.isActive}
                FooterText={card.FooterText}
                FooterStyle={design.FooterStyle}
                FooterButtonOnClickEvent={footerOnClick}
                AmprentaSVG={AmprentaSVG}
              />
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default MapCards;
