import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export function HomeNav() {
  return (
    <Navbar className="border-bottom bg-secondary font-weight-bold" expand="lg">
      <Container>
        <Navbar.Brand style={{ fontSize: 35 }}>Morley Stuff</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profiles">Profiles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
