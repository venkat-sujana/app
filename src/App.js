import React from "react";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
function App() {
  return (
    <div className="App">
      <h1>This is my first react app</h1>
      {/* Add some comments to explain what this component does. */}
      {/* TODO: Add a link to the GitHub repo. */}
      <Home/>
      <Contact/>
      <About/>
      <Service/>
    </div>
  );
}

export default App;
