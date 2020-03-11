import React from "react";
import { Navbar } from "react-bootstrap";

export function HomeNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{ fontSize: 50, fontWeight: "bold" }}>
        Morley Stuff
      </Navbar.Brand>
    </Navbar>
  );
}
