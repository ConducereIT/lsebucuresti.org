import React, { useEffect, useRef } from "react";
import { Background, Parallax } from "react-parallax";
import LseBanner from "../assets/img/LseBanner.webp";
import AnimatedCounter from "./AnimatedCounter.component";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Stats() {
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
      <Parallax strength={400} className="mb-10">
        <Background className="relative w-screen h-screen">
          <img
            src={LseBanner}
            alt="LSE Banner"
            className="object-cover h-screen w-screen"
          />
        </Background>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-between h-full w-full ">
          <div className="text-white md:p-4 md:m-20 p-2 m-5">
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
              <p className="flex justify-center pb-4 text-2xl font-semibold border-b-4">
                +<AnimatedCounter from={0} to={500} />
              </p>
              <p className="flex justify-center pb-4 font-bold p-4 text-center">
                Membrii activi
              </p>
            </motion.div>
          </div>
          <div className="text-white md:p-4 md:m-20 p-2 m-5">
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
              <p className="flex justify-center pb-4 text-2xl font-semibold border-b-4">
                +<AnimatedCounter from={0} to={2000} />
              </p>
              <p className="flex justify-center pb-4 font-bold p-4 text-center">
                Alumni
              </p>
            </motion.div>
          </div>
          <div className="text-white md:p-4 md:m-20 p-2 m-5">
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
              <p className="flex justify-center pb-4 text-2xl font-semibold border-b-4">
                +<AnimatedCounter from={0} to={100} />
              </p>
              <p className="flex justify-center pb-4 font-bold p-4 text-center">
                Proiecte de succes
              </p>
            </motion.div>
          </div>
          <div className="text-white md:p-4 md:m-20 p-2 m-5">
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
              <p className="flex justify-center pb-4 text-2xl font-semibold border-b-4">
                +<AnimatedCounter from={0} to={30} />
              </p>
              <p className="flex justify-center pb-4 font-bold p-4 text-center">
                Ani de activitate
              </p>
            </motion.div>
          </div>
        </div>
      </Parallax>
    </>
  );
}
