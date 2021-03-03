import "./App.css";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Profiles from "./components/Profiles/Profiles";
import Social from "./components/Social/Social"
import Professional from "./components/Professional/Professional"
import MyNavBar from "./components/Nav/MyNavBar";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Router>
        <Switch>
          <Route path="/professional" component={Professional}/>
          <Route path="/social" component={Social}/>
          <Route
            path="/profiles"
            component={Profiles}
          />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <div className="fixed-bottom bg-light">
        <Container>Morleystuff</Container>
      </div>
    </div>
  );
}

export default App;
