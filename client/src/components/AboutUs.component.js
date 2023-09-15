import React from "react";
import Carousel from "./Carousel.component";
import { AboutUsSlides } from "../assets/config/configCarouselAboutUs";

export default function AboutUs() {
  return (
    <>
      <div className=" bg-slate-100 p-4 h-1/2">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div>
            <div>
              <h1 className="uppercase text-2xl md:text-4xl font-bold p-3 mb-2">
                Cine suntem?
              </h1>
              <hr className=" border-4 border-blue-600 opacity-90" />
              <p className=" md:text-2xl p-2 text-left opacity-90">
                <span className=" font-semibold">
                  Liga Studenților Electroniști (LSE)
                </span>{" "}
                este organizația studențească din{" "}
                <span className=" font-semibold">
                  Facultatea de Electronică, Telecomunicații și Tehnologia
                  Informației
                </span>{" "}
                care reprezintă și apară interesele studenților, atât pe
                probleme social-administrative, cât și pe probleme academice.
                Înființată în anul 1990, LSE s-a dorit a fi o punte între
                forurile de conducere ale Facultății și Universității și
                studenți, acum extinzându-și activitatea către dezvoltarea
                personală si profesională a membrilor săi, dar și a studenților
                din domeniul tehnic.
              </p>
            </div>
            <div>
              <h1 className="uppercase text-2xl md:text-4xl font-bold p-3 mb-2">
                Viziune
              </h1>
              <hr className=" border-4 border-blue-600 opacity-90" />
              <p className=" md:text-2xl p-2 text-left opacity-90">
                <span className=" font-semibold">
                  Liga Studenților Electroniști
                </span>{" "}
                a încercat mereu să valorifice la maximum studenția, propunând
                și oferind studenților o gamă largă de evenimente: culturale,
                sportive, tehnice, concursuri, dar și platforme de job-uri
                special pentru ei, conferințe interesante sau student
                exchange-uri. Astăzi, cu ajutorul a peste 500 de membri, Liga
                Studenților Electroniști este binecunoscută la nivel național
                pentru un număr impresionant de proiecte.
              </p>
            </div>
          </div>

          <div className="">
            <Carousel slides={AboutUsSlides} />
          </div>
        </div>
      </div>
    </>
  );
}
