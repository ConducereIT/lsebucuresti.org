import React, { useContext } from "react";
import { PreloaderContext } from "./PreloaderProvider.component";
import LogoWhite from "../assets/img/LogoLiga/icon_logoLSEblue.svg";
const Preloader = () => {
  const { isLoading } = useContext(PreloaderContext);

  if (!isLoading) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-white duration-300">
        <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-600"></div>
        <img src={LogoWhite} class="rounded-full h-28 w-28" />
      </div>
    </>
  );
};

export default Preloader;
