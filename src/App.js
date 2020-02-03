import React from "react";
import "./App.css";
import ProfileList from "./components/ProfileList";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Intro />
      <ProfileList />
    </div>
  );
}

export default App;
