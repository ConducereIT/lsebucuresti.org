import React, { useEffect, useRef } from "react";
import LsePhoto from "../assets/img/Evenimente/alteEvenimente_PrezentareaSpecializarilor.jpg";
import {
  motion,
  useInView,
  useAnimation,
} from "framer-motion/dist/framer-motion";
import AboutFaq from "./AboutFaq.component";
export default function About() {
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
                      <h1 className="uppercase text-xl md:text-3xl font-bold pb-3 mb-2">
                        Cine suntem?
                      </h1>
                      <hr className=" border-4 border-blue-600 opacity-90 w-1/4 pb-6" />
                      <p className=" text-sm md:text-base text-left opacity-90 md:pr-8">
                        <span className=" font-bold">
                          Liga Studenților Electroniști (LSE)
                        </span>{" "}
                        este organizația studențească din{" "}
                        <span className=" font-bold">
                          {" "}
                          Facultatea de Electronică, Telecomunicații și
                          Tehnologia Informației
                        </span>
                        care reprezintă și apară interesele studenților, atât pe
                        probleme social-administrative, cât și pe probleme
                        academice. Înființată în anul 1990, LSE s-a dorit a fi o
                        punte între forurile de conducere ale Facultății și
                        Universității și studenți, acum extinzându-și
                        activitatea către dezvoltarea personală si profesională
                        a membrilor săi, dar și a studenților din domeniul
                        tehnic.
                      </p>
                    </div>
                  </div>

                  <div>
                    <img
                      className=" rounded-lg  "
                      src={LsePhoto}
                      alt="UsPhoto"
                    />
                  </div>
                </div>
              </div>
              <div className=" md:pt-20 pt-10">
                <div className=" grid grid-cols-1 lg:grid-cols-2">
                  <div className=" pb-10">
                    <img
                      className=" rounded-lg "
                      src={LsePhoto}
                      alt="ViziunePhoto"
                    />
                  </div>
                  <div className=" pb-10 md:pb-0">
                    <div className="md:pb-16 md:pl-8">
                      <h1 className="uppercase text-xl md:text-3xl font-bold pb-3 mb-2">
                        Viziune
                      </h1>
                      <hr className=" border-4 border-blue-600 opacity-90 w-1/4 pb-6" />
                      <p className=" text-sm md:text-base text-left opacity-90 ">
                        <span className=" font-bold">
                          Liga Studenților Electroniști
                        </span>{" "}
                        a încercat mereu să valorifice la maximum studenția,
                        propunând și oferind studenților o gamă largă de
                        evenimente: culturale, sportive, tehnice, concursuri,
                        dar și platforme de job-uri special pentru ei,
                        conferințe interesante sau student exchange-uri.
                        <br /> <br />
                        Astăzi, cu ajutorul a peste 500 de membri, Liga
                        Studenților Electroniști este binecunoscută la nivel
                        național pentru un număr impresionant de proiecte.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:pt-20 pt-10">
                <div className=" grid grid-cols-1 lg:grid-cols-2">
                  <div className=" md:pr-8 md:pt-0 pb-4 md:pb-0">
                    <AboutFaq />
                  </div>

                  <div>
                    <img
                      className=" rounded-lg "
                      src={LsePhoto}
                      alt="FaqPhoto"
                    />
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
