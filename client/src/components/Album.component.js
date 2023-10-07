import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export default function Album({ slides }) {
  return (
    <>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showStatus={false}
        interval={4000}
        emulateTouch={true}
        autoPlay={true}
        showThumbs={false}
        className="flex justify-center mt-10 mb-20"
        width={"85%"}
      >
        {slides.map((slide, slideIndex) => {
          const altText = "Poza " + slideIndex;
          return (
            <div>
              <img src={slide.url} alt={altText} className={slide.style} />
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
