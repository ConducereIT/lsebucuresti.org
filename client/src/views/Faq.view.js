import React, { useEffect } from "react";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import FAQ from "../components/Faq.component";
const Faq = () => {
    useEffect(() => {
        document.title = "FAQ";  
      }, []);
    return (
        <>
            <Header />
            <FAQ />
            <Footer />
        </>
    );
}

export default Faq;