import React, { useEffect} from "react";

const Despre = () => {
    useEffect(() => {
        document.title = "Despre noi";  
      }, []);
   
    return (
        <h1>Despre</h1>
    );
}

export default Despre;