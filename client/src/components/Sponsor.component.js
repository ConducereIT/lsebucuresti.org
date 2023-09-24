import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
} from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";
import mitclima from "../assets/img/MitClima-2.png";
import etti from "../assets/img/ETTI.webp";
import mitsubishi from "../assets/img/Mitsubishi.png";
import upb from "../assets/img/UPB.png";
import mayo from "../assets/img/4mayo.png";
import hipo from "../assets/img/hipo.png";

const Sponsor = () => {
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
        <div className="flex justify-center items-center flex-col my-10">
          <div className="text-3xl tracking-wider font-bold mb-3">
            PARTENERI
          </div>
          <div className="flex flex-col items-center justify-around gap-10 md:flex-row">
            <Link
              className="h-40 w-40 flex items-center justify-center hover:scale-110 duration-300"
              to="https://mitclima.ro/"
              target="_blank"
            >
              <img src={mitclima} alt="mitclima"></img>
            </Link>
            <Link
              className="h-40 w-40 flex items-center justify-center hover:scale-110 duration-300"
              to="http://www.electronica.pub.ro/"
              target="_blank"
            >
              <img src={etti} alt="etti"></img>
            </Link>
            <Link
              className="h-40 w-40 flex items-center justify-center hover:scale-110 duration-300"
              to="https://www.mitsubishielectric.com/en/index.html"
              target="_blank"
            >
              <img src={mitsubishi} alt="mitsubishi"></img>
            </Link>
            <Link
              className="h-40 w-40 flex items-center justify-center hover:scale-110 duration-300"
              to="https://upb.ro/"
              target="_blank"
            >
              <img src={upb} alt="upb"></img>
            </Link>
            <Link
              className="h-40 w-40 flex items-center justify-center mr-6 hover:scale-110 duration-300"
              to="https://4mayo.ro/"
              target="_blank"
            >
              <img src={mayo} alt="mayo"></img>
            </Link>
            <Link
              className="h-40 w-40 flex items-center justify-center hover:scale-110 duration-300"
              to="https://www.hipo.ro/"
              target="_blank"
            >
              <img src={hipo} alt="hipo"></img>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sponsor;
