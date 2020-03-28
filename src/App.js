import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import profiles from "./data";
import { HomeNav } from "./components/HomeNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilesPage from "./components/ProfilesPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <HomeNav />
        </Col>
      </Row>
      <Router>
        <Switch>
          <Route
            path="/profiles"
            render={props => <ProfilesPage profiles={profiles} />}
          />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
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
