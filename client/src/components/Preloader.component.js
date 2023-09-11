import React, { useContext } from "react";
import { PreloaderContext } from "./PreloaderProvider.component";

const Preloader = () => {
  const { isLoading } = useContext(PreloaderContext);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="preloader-container">
      <div className="loader">
        <div className="loader-wheel"></div>
        <div className="loader-text"></div>
      </div>
    </div>
  );
};

export default Preloader;
