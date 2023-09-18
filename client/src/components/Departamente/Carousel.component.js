import React from "react";
import Carousel from "../Carousel.component";

const CarouselDepartament = ({ selectedTab }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <div className="pb-32">
          <h1 className="uppercase text-2xl md:text-4xl font-bold p-3 mb-2">
            {selectedTab.title}
          </h1>
          <hr className=" border-4 border-blue-600 opacity-90" />
          <p className=" md:text-xl p-2 text-left opacity-90">
            {selectedTab.text}
          </p>
        </div>
      </div>

      <div className="-translate-y-10">
        <Carousel slides={selectedTab.images} />
      </div>
    </div>
  );
};

// pl-40 pr-20 -translate-y-10

export default CarouselDepartament;
