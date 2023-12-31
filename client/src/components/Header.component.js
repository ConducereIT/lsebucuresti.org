import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/img/LogoWhite.webp";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-blue-600 md:scale-x-100">
      <Container>
        <Navbar.Brand href="/">
          <div className="flex h-full w-full ">
            <img src={Logo} className="h-full w-full mr-3" alt="LSE Logo" />
            <span className="self-center md:text-2xl text-base font-semibold whitespace-nowrap text-white">
              Liga Studenților Electroniști
            </span>
          </div>
        </Navbar.Brand>
        <div className="flex justify-center content-center">
          <Navbar.Toggle className="bg-white" />
        </div>
        <Navbar.Collapse className=" justify-content-end">
          <Nav className=" gap-2 md:gap-4">
            <Nav.Link href="/">
              <span className="text-xl text-white font-semibold hover:opacity-80 duration-300">
                Acasa
              </span>
            </Nav.Link>
            <Nav.Link href="/departamente">
              <span className="text-xl text-white font-semibold hover:opacity-80 duration-300">
                Departamente
              </span>
            </Nav.Link>
            <Nav.Link href="/membri">
              <span className="text-xl text-white font-semibold hover:opacity-80 duration-300">
                Membri
              </span>
            </Nav.Link>
            <Nav.Link href="/evenimente">
              <span className="text-xl text-white font-semibold hover:opacity-80 duration-300">
                Evenimente
              </span>
            </Nav.Link>
            <Nav.Link href="/facultate">
              <span className="text-xl text-white font-semibold hover:opacity-80 duration-300">
                Facultate
              </span>
            </Nav.Link>
            {/*<Nav.Link href="/faq">*/}
            {/*  <span className="text-xl text-white font-semibold hover:opacity-80 duration-300">*/}
            {/*    FAQ*/}
            {/*  </span>*/}
            {/*</Nav.Link>*/}
            <Nav.Link href="/contact">
              <span className="text-xl text-white font-semibold hover:opacity-80 duration-300">
                Contact
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
