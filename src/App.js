import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import profiles from "./data";

import HomePage from "./components/HomePage";
import ProfilesPage from "./components/ProfilesPage";
import { HomeNav } from "./components/HomeNav";

function App() {
  return (
    <div className="root">
      <HomeNav />
      <Router>
        <Switch>
          <Route
            path="/profiles"
            render={(props) => <ProfilesPage profiles={profiles} />}
          />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
      <div className="fixed-bottom bg-light">
        <Container>
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
        </Container>
      </div>
    </div>
  );
}

export default App;
