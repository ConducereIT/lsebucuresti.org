import React, { useRef, useState, useEffect } from "react";
import { Parallax, Background } from "react-parallax";

//Assets
import LseBanner from "../assets/img/LseBanner.webp";

//Packages
import { motion, useInView, useAnimation } from "framer-motion";

const Banner = () => {
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
      <Parallax className="rounded-lg" strength={300}>
        <Background className="relative w-screen h-screen filter blur-md">
          <img
            src={LseBanner}
            alt="LSE Banner"
            className="object-cover h-screen w-screen"
          />
        </Background>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h1 className="text-3xl font-extrabold sm:text-5xl lg:p-4 text-white">
                Liga Studenților
              </h1>
              <h2 className="text-3xl font-extrabold text-blue-600 sm:text-5xl">
                Electroniști
              </h2>
              <p className="mt-4 sm:text-md/relaxed text-white">
                ”Mai puternici împreună!”
              </p>
            </motion.div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Banner;
