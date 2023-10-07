import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CarouselDepartament from "./Carousel.component";
import Descriere from "./Descriere.component";
import Conducere from "./Conducere.component";

import {
  styledObjectConducere,
  mappingObjectConducere,
} from "../../assets/config/configDepartamente";

import AmprentaSVG from "../../assets/img/LogoLiga/icon_logoLSEblue.webp";

const DepartamentItem = ({ selectedTab }) => {
  const [index, setIndex] = useState(0);
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

  const styleButton = isMobile
    ? "text-base font-bold mt-5 pl-4 pr-4 text-black  shadow-bottom bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out h-10"
    : "text-bold md:ml-20  md:text-2xl md:font-semibold shadow-bottom md:relative md:inline-block  md:w-44 md:h-3/3 text-center text-black text-base md:ml-4 md:text-2xl md:font-semibold md:relative md:inline-block md:w-32 md:h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out";

  return (
    <div className="CustomDepartamentItem h-auto w-auto ">
      <div className="DepartamentItem md:w-auto flex justify-center md:h-10 md:mt-[-7rem] md:space-x-16 space-x-4">
        <motion.button className={styleButton} onClick={() => setIndex(0)}>
          Descriere
        </motion.button>
        <motion.button className={styleButton} onClick={() => setIndex(1)}>
          Evenimente
        </motion.button>
        <motion.button className={styleButton} onClick={() => setIndex(2)}>
          Conducere
        </motion.button>
      </div>
      <motion.div className=" md:h-[70%] md:w-full">
        <div>
          {index === 0 && (
            <motion.div
              key="component1"
              initial={{ opacity: 0, x: -50, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 50, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" flex items-center justify-self-center justify-center py-10 "
            >
              <Descriere
                descriere={selectedTab.descriere}
                locatie={selectedTab.locatie}
                ora={selectedTab.ora}
                imgDescriere={selectedTab.imgDescriere}
                imgDescriereTlf={selectedTab.imgDescriereTlf}
              />
            </motion.div>
          )}
          {index === 1 && (
            <motion.div
              key="component2"
              initial={{ opacity: 0, x: -50, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 50, y: 0 }}
              transition={{ duration: 0.5 }}
              className="h-auto w-auto mt-5"
            >
              <CarouselDepartament
                firstTitle={selectedTab.firstTitle}
                firstDescription={selectedTab.firstDescription}
                firstPicture={selectedTab.firstPicture}
                firstPictureTlf={selectedTab.firstPictureTlf}
                secondTitle={selectedTab.secondTitle}
                secondDescription={selectedTab.secondDescription}
                secondPicture={selectedTab.secondPicture}
                secondPictureTlf={selectedTab.secondPictureTlf}
                thirdTitle={selectedTab.thirdTitle}
                thirdDescription={selectedTab.thirdDescription}
                thirdPicture={selectedTab.thirdPicture}
                thirdPictureTlf={selectedTab.thirdPictureTlf}
              />
            </motion.div>
          )}
          {index === 2 && (
            <motion.div
              key="component3"
              initial={{ opacity: 0, x: -50, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 50, y: 0 }}
              transition={{ duration: 0.5 }}
              className="componenta3  h-[100%] w-auto"
            >
              <Conducere
                styledObject={styledObjectConducere}
                mappingObject={mappingObjectConducere}
                AmprentaSVG={AmprentaSVG}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default DepartamentItem;
