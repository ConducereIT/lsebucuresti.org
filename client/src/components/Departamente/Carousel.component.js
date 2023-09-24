import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "../../assets/img/Evenimente/alteEvenimente_conectica.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slide = ({ text, image, orientation }) => {
  const isMobile = orientation === "mobile";
  return (
    <div className={isMobile ? " h-96 " : "hidden sm:flex items-center"}>
      {isMobile ? (
        <>
          <div>
            <img src={image} alt="Slide" />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">{text}</h2>
            <p>Descrierea textului pentru acest slide.</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold">{text}</h2>
            <p>Descrierea textului pentru acest slide.</p>
          </div>
          <div className="w-1/2">
            <img src={image} alt="Slide" />
          </div>
        </>
      )}
    </div>
  );
};

const MobileDevice = () => {
  return (
    <div className="h-[100%]  content-center  ">
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showStatus={false}
        interval={7500}
        emulateTouch={true}
        autoPlay={true}
        className="w-full h-[100%] content-center carousel-wrapper "
      >
        <Slide text="Text pe slide 1" image={Image} orientation="mobile" />
        <Slide text="Text pe slide 2" image={Image} orientation="mobile" />
        <Slide text="Text pe slide 3" image={Image} orientation="mobile" />
      </Carousel>
    </div>
  );
};

const PcDevice = () => {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        className="w-full h-auto mt-24 mb-auto justify-center  carousel-wrapper"
        showArrows={false}
        showStatus={false}
        interval={5000}
        autoPlay={true}
        emulateTouch={true}
        dynamicHeight={true}
      >
        {/* Slide 1 */}
        <div className="flex items-center h-full">
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold">Text pe slide 1</h2>
            <p>Descrierea textului pe slide 1.</p>
          </div>
          <div className="w-1/2">
            <img src={Image} alt="Slide 1" className="rounded-xl" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex items-center h-full">
          <div className="w-1/2">
            <img src={Image} alt="Slide 2" className="rounded-xl" />
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold">Text pe slide 2</h2>
            <p>Descrierea textului pe slide 2.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex items-center h-full">
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold">Text pe slide 3</h2>
            <p>Descrierea textului pe slide 3.</p>
          </div>
          <div className="w-1/2">
            <img src={Image} alt="Slide 3" className="rounded-xl" z />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

const CarouselDepartament = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mobileMediaQuery.matches);

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    mobileMediaQuery.addListener(handleResize);
    return () => {
      mobileMediaQuery.removeListener(handleResize);
    };
  }, []);

  return isMobile ? <MobileDevice /> : <PcDevice />;
};

export default CarouselDepartament;
