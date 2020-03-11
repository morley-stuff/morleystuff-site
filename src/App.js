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
          <h2>Joshua Morley</h2>
          <p>
            DevOps Engineer, Java Developer. <br />
            This website is a work in progress to consolidate my public and
            personal information.
          </p>
        </Col>
      </Row>
      <Row>
        {profiles.map(data => (
          <Col xs={3} md={2} className="mb-5" key={`${data.id}`}>
            <ProfileCard data={data} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <p>
            Website
            <br />
            Built with{" "}
            <a href="https://react-bootstrap.github.io/">React Bootstrap</a>
            <br />
            Hosted via <a href="https://aws.amazon.com/amplify/">AWS Amplify</a>
            <br />
            Icons from <a href="iconmonstr.com">IconMonstr</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
