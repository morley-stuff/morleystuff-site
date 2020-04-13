import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export function HomeNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{ fontSize: 40, fontWeight: "bold" }}>
        Morley Stuff
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profiles">Profiles</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
