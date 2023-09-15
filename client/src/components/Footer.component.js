import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import Logo from "../assets/img/LogoWhite.png";
export default function Footer() {
  return (
    <>
      <footer className="bg-blue-600 mt-16 pt-3 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center mb-4 sm:mb-0 m-2">
              <img src={Logo} className="h-9 mr-3" alt="LSE Logo" />
              <span className="self-center md:text-2xl text-xl font-semibold whitespace-nowrap text-white">
                Liga Studenților Electroniști
              </span>
            </div>
            <div className="md:grid md:grid-cols-4 md:gap-4 flex justify-between m-3">
              <a
                href="https://www.facebook.com/lseorgro"
                target="_blank"
                className=" hover:opacity-80 duration-300 hover:scale-110"
              >
                <BsFacebook size={20} color="white" />
              </a>
              <a
                href="https://www.instagram.com/ligastudentilorelectronistilse"
                target="_blank"
                className=" hover:opacity-80 duration-300 hover:scale-110"
              >
                <BsInstagram size={20} color="white" />
              </a>
              <a
                href="https://www.youtube.com/user/lsebucuresti"
                target="_blank"
                className=" hover:opacity-80 duration-300 hover:scale-110"
              >
                <BsYoutube size={20} color="white" />
              </a>
              <a
                href="https://www.linkedin.com/company/ligastudentilorelectronisti"
                target="_blank"
                className=" hover:opacity-80 duration-300 hover:scale-110 rounded-lg"
              >
                <BsLinkedin size={20} color="white" />
              </a>
            </div>
          </div>
          <hr className="my-6 border-white sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white sm:text-center ">
            Copyright to @Lse București
          </span>
        </div>
      </footer>
    </>
  );
}
