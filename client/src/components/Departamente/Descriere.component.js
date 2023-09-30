import React from "react";
import secondPicture from "../../assets/img/Facultate/secondPicture.webp";

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
              <hr className="border-4 border-black opacity-90 w-1/4 pb-6" />
              <p>
                ipsum dolor sit amet consectetur adipiscing elit pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas integer eget aliquet nibh praesent tristique
                magna sit amet purus gravida quis blandit turpis cursus in hac
                habitasse platea dictumst quisque sagittis purus sit amet
                volutpat consequat mauris nunc congue
              </p>
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-semibold pb-3 mb-2">
                Unde ne gasiti?
              </h1>
              <hr className="border-4 border-black opacity-90 w-1/4 pb-6" />
              DESCRIERE
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg mt-6 md:ml-6"
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
