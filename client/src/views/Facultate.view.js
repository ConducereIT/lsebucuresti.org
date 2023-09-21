import React, { useEffect } from "react";

const Facultate = () => {
    useEffect(() => {
        document.title = "Facultate";  
      }, []);
    return (
        <h1>Facultate</h1>
    );
}

export default Facultate;