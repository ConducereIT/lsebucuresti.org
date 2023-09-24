import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
} from "framer-motion/dist/framer-motion";

export default function LeftRight({
  firstPicture,
  titleFirst,
  descriptionFirst,
  secondPicture,
  secondTitle,
  secondDescription,
}) {
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
      <div className="pb-10 pt-10 md:mx-52 mx-2 lg:px-52 px-8">
        <div>
          <main>
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
              <div className="py-10">
                <div className=" grid grid-cols-1 lg:grid-cols-2">
                  <div className=" pb-10 md:pb-0">
                    <div className="md:pb-16">
                      <h1 className="text-xl md:text-2xl  font-bold pb-3 mb-2">
                        {titleFirst}
                      </h1>
                      <hr className=" border-4 border-blue-600 opacity-90 w-1/4 pb-6" />
                      {descriptionFirst}
                    </div>
                  </div>

                  <div>
                    <img
                      className=" rounded-lg mt-6 md:ml-36"
                      src={firstPicture}
                      alt="ETTI"
                    />
                  </div>
                </div>
              </div>
              <div className=" md:pt-20 pt-10">
                <div className=" grid grid-cols-1 lg:grid-cols-2">
                  <div className=" pb-10">
                    <img
                      className=" rounded-lg mt-36 scale-y-125 "
                      src={secondPicture}
                      alt="Electronica"
                    />
                  </div>
                  <div className=" pb-10 md:pb-0">
                    <div className="md:pb-16 md:pl-8">
                      <h1 className="text-lg md:text-3xl font-bold pb-3 mb-2">
                        {secondTitle}
                      </h1>
                      <hr className="border-4 border-blue-600 opacity-90 w-1/4 pb-6" />
                      {secondDescription}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </>
  );
}
