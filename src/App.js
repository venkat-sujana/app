import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";

function App() {
 
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
