import React from "react";
import "./App.css";
import ProfileList from "./components/ProfileList";
import Intro from "./components/Intro";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as GitHubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as TwitterIcon } from "./icons/twitter.svg";

function App() {
  return (
    <div className="App">
      <Intro />
      <ProfileList />
      <FacebookIcon />
      <GitHubIcon />
      <LinkedInIcon />
      <TwitterIcon />
    </div>
  );
}

export default App;
