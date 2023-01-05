
import React from "react";

import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import { Hero } from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Works from "./Components/Works";
function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar/>
    
      
      <Hero/>
      
      <Feature/>
      
      <Works/>
      
      
      <Footer/>
    </div>
  );
}

export default App;
