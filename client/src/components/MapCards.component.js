import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import CardView from "./Card.component";

const MapCards = ({ styledObject, mappingObject }) => {
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
  //

  const design = {
    styleComponent: styledObject.styleComponent,
    style: styledObject.style,
    CardHeaderStyle: styledObject.CardHeaderStyle,
    CardBodyStyle: styledObject.CardBodyStyle,
    FooterStyle: styledObject.FooterStyle,
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
      </motion.div>
    </>
  );
};

export default MapCards;
