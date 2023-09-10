import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://i.imgur.com/3Z0Q8ZB.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          LSE Bucuresti
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="/">Acasa</Nav.Link>
            <Nav.Link href="/despre-noi">Despre noi</Nav.Link>
            <Nav.Link href="/membrii">Membrii</Nav.Link>
            <Nav.Link href="/evenimente">Evenimente</Nav.Link>
            <Nav.Link href="/facultate">Facultate</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
