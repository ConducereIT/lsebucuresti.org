import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "../../assets/img/Evenimente/alteEvenimente_conectica.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import imagineCaritabil from "../../assets/img/departamente/caritabil.webp";
import ImagineChitare from "../../assets/img/departamente/Cultural/noaptea_chitarelor.webp";
import ImagineC from "../../assets/img/departamente/Cultural/ccg.webp";

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
            <h2 className="text-3xl mb-10 font-bold">Spectacolul Caritabil</h2>
            <p>
              Dans, muzică, teatru, stand-up, licitație cu obiecte handmade,
              toate se reunesc într-un eveniment pentru a ajuta de Crăciun pe
              cineva mai puțin norocos!
            </p>
          </div>
          <div className="w-1/2">
            <img src={imagineCaritabil} alt="Slide 1" className="rounded-xl" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex items-center h-full">
          <div className="w-1/2">
            <img src={ImagineChitare} alt="Slide 2" className="rounded-xl" />
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-3xl mb-10 font-bold">Noaptea Chitarelor</h2>
            <p>
              Dacă ai o chitară, cânți solo sau vrei doar să te simți bine,
              Noaptea Chitarelor e sigur locul perfect pentru distracția
              specifică studenției!
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex items-center h-full">
          <div className="w-1/2 p-4">
            <h2 className="text-3xl mb-10 font-bold">
              Concursul de Cultură Generală
            </h2>
            <p>
              Împreună cu dep. Învățământ organizăm acest eveniment unde îți
              poți testa cunoștințele din diverse domenii, dar promitem și
              distracție la cote maxime!
            </p>
          </div>
          <div className="w-1/2">
            <img src={ImagineC} alt="Slide 3" className="rounded-xl" z />
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
