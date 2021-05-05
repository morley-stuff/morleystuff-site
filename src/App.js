import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Profiles from "./components/Profiles/Profiles";
import MyNavBar from "./components/Nav/MyNavBar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Router>
        <Switch>
          
          <Route
            path="/profiles"
            component={Profiles}
          />
          <Route
            path="/projects"
            component={Projects}
          />
          <Route 
            path="/" 
            component={Home}
          />
          
        </Switch>
      </Router>
      <div className="fixed-bottom bg-light">
        <Container>Morleystuff</Container>
      </div>
    </div>
  );
}

export default App;
