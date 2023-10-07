import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slide = ({ text, image, description, orientation }) => {
  const isMobile = orientation === "mobile";
  return (
    <div className={isMobile ? " h-96 " : "hidden sm:flex items-center"}>
      {isMobile ? (
        <>
          <div>
            <img src={image} alt={text} />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">{text}</h2>
            <p>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold">{text}</h2>
            <p>{description}</p>
          </div>
          <div className="w-1/2">
            <img src={image} alt={text} />
          </div>
        </>
      )}
    </div>
  );
};

const MobileDevice = ({
  firstTitle,
  firstDescription,
  firstPicture,
  secondTitle,
  secondDescription,
  secondPicture,
  thirdTitle,
  thirdDescription,
  thirdPicture,
}) => {
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
        <Slide
          text={firstTitle}
          description={firstDescription}
          image={firstPicture}
          orientation="mobile"
        />
        <Slide
          text={secondTitle}
          description={secondDescription}
          image={secondPicture}
          orientation="mobile"
        />
        <Slide
          text={thirdTitle}
          description={thirdDescription}
          image={thirdPicture}
          orientation="mobile"
        />
      </Carousel>
    </div>
  );
};

const PcDevice = ({
  firstTitle,
  firstDescription,
  firstPicture,
  secondTitle,
  secondDescription,
  secondPicture,
  thirdTitle,
  thirdDescription,
  thirdPicture,
}) => {
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
            <h2 className="text-3xl mb-10 font-bold">{firstTitle}</h2>
            <p>{firstDescription}</p>
          </div>
          <div className="w-1/2">
            <img src={firstPicture} alt={firstTitle} className="rounded-xl" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex items-center h-full">
          <div className="w-1/2">
            <img src={secondPicture} alt={secondTitle} className="rounded-xl" />
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-3xl mb-10 font-bold">{secondTitle}</h2>
            <p>{secondDescription}</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex items-center h-full">
          <div className="w-1/2 p-4">
            <h2 className="text-3xl mb-10 font-bold">{thirdTitle}</h2>
            <p>{thirdDescription}</p>
          </div>
          <div className="w-1/2">
            <img src={thirdPicture} alt={thirdTitle} className="rounded-xl" z />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

const CarouselDepartament = ({
  firstTitle,
  firstDescription,
  firstPicture,
  secondTitle,
  secondDescription,
  secondPicture,
  thirdTitle,
  thirdDescription,
  thirdPicture,
}) => {
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

  return isMobile ? (
    <MobileDevice
      firstTitle={firstTitle}
      firstDescription={firstDescription}
      firstPicture={firstPicture}
      secondTitle={secondTitle}
      secondDescription={secondDescription}
      secondPicture={secondPicture}
      thirdTitle={thirdTitle}
      thirdDescription={thirdDescription}
      thirdPicture={thirdPicture}
    />
  ) : (
    <PcDevice
      firstTitle={firstTitle}
      firstDescription={firstDescription}
      firstPicture={firstPicture}
      secondTitle={secondTitle}
      secondDescription={secondDescription}
      secondPicture={secondPicture}
      thirdTitle={thirdTitle}
      thirdDescription={thirdDescription}
      thirdPicture={thirdPicture}
    />
  );
};

export default CarouselDepartament;
