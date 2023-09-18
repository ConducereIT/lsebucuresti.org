import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselDepartament from "./Carousel.component";
import Descriere from "./Descriere.component";

const DepartamentItem = ({ selectedTab }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="CustomDepartamentItem ">
      <div className="DepartamentItem md:w-auto flex justify-center md:h-10  ">
        <motion.button
          className="  text-base md:ml-20  md:text-xl md:font-semibold md:relative md:inline-block  md:w-32 md:h-2/3 text-black"
          onClick={() => setIndex(0)}
        >
          Descriere
        </motion.button>
        <motion.button
          className="  text-base md:ml-20  md:text-xl md:font-semibold md:relative md:inline-block  md:w-32 md:h-2/3 text-black"
          onClick={() => setIndex(1)}
        >
          Evenimente
        </motion.button>
        <motion.button
          className=" text-base md:ml-20   md:text-xl md:font-semibold md:relative md:inline-block   md:w-32 md:h-2/3 text-black"
          onClick={() => setIndex(2)}
        >
          Conducere
        </motion.button>
      </div>
      <motion.div className="border border-black md:h-[90%] md:w-full">
        <AnimatePresence>
          {index === 0 && (
            <motion.div
              key="component1"
              initial={{ opacity: 0, x: -50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -50, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-100"
            >
              <Descriere />
            </motion.div>
          )}
          {index === 1 && (
            <motion.div
              key="component2"
              initial={{ opacity: 0, x: -50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -50, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <CarouselDepartament selectedTab={selectedTab} />
            </motion.div>
          )}
          {index === 2 && (
            <motion.div
              key="component3"
              initial={{ opacity: 0, x: -50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -50, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h>Index 3</h>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DepartamentItem;
