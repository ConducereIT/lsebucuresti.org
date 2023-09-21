import React, { useEffect } from "react";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import ContactComponent from "../components/Contact.component";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <Header />
      <ContactComponent />
      <Footer />
    </>
  );
}
