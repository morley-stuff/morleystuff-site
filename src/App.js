import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import { ProfileCard } from "./components/ProfileCard";
import profiles from "./data";
import { HomeNav } from "./components/HomeNav";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <HomeNav />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>An exhaustive resource</h2>
          <p>
            This website was created to serve as an access point for all of my
            public information. From online profiles, to professional and
            educational experience, to contact methods.
          </p>
        </Col>
      </Row>
      <Row>
        {profiles.map(data => (
          <Col xs={3} className="mb-5" key={`${data.id}`}>
            <ProfileCard data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
