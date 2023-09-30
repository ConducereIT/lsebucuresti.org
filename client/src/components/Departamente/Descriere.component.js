import React from "react";
import secondPicture from "../../assets/img/departamente/Cultural/ccg.webp";

const Descriere = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="w-4/5 md:w-80%">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2 md:pr-10 md:mt-16">
            <div className="pb-10 md:pb-20">
              <h1 className="text-xl md:text-3xl font-semibold pb-3 mb-2">
                Cine suntem noi?
              </h1>
              <hr className="border-4 border-black opacity-90 w-1/4 pb-4" />
              <p>
                Departamentul Cultural reprezintă latura artistică a ligii,
                locul unde studenții pot da frâu liber imaginației și spiritului
                creativ.
              </p>
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-semibold pb-3 mb-2">
                Unde ne gasiti?
              </h1>
              <hr className="border-4 border-black opacity-90 w-1/4 pb-6" />
              Locatie: A05 Miercuri
              <br />
              <br />
              Ora: 20:00
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg mt-6 md:ml-8"
              src={secondPicture}
              alt="ETTI"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descriere;
