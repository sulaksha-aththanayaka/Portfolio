import React from "react";
import About from "./About";
import background from "../assets/background.jpg"

function Hero() {
  return (
    <div className="">
      <div className="z-10 relative h-screen">
        <About/>
      </div>
      <div className="absolute top-0 left-0 z-0 opacity-50 w-full h-screen">
        <img src={background} className="w-full h-full object-cover bg-orange-600"/>
      </div>
    </div>
  );
}

export default Hero;