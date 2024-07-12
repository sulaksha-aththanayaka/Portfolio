import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

  const [clicked, setClicked] = useState(false);

  return (
    <div className="z-20 fixed w-full bg-white">
      <div className="h-[100%] flex items-center lg:justify-around justify-between w-full px-4 sm:px-8 lg:px-16 py-2">
        <div className="w-[40%]">
          <div className="md:ml-5 w-[34px] sm:w-[40px] md:w-[50px]">
            <a href="/"><img src={logo} /></a>
          </div>
        </div>
        <div className="relative" onClick={() => setClicked(!clicked)}>
          <GiHamburgerMenu size={'30px'} className="sm:hidden cursor-pointer"/>
          {
            clicked ? (
              <>
                <div className='flex flex-col absolute sm:relative top-full right-0 sm:hidden'>
                  <a className="p-3 bg-slate-200 hover:bg-slate-300 cursor-pointer" href='#about'>About</a>
                  <a className="p-3 bg-slate-200 hover:bg-slate-300 cursor-pointer" href='#projects'>Projects</a>
                  <a className="p-3 bg-slate-200 hover:bg-slate-300 cursor-pointer" href='#contact'>Contact</a>
                  <a className="p-3 bg-slate-200 hover:bg-slate-300 cursor-pointer" href='#experience'>Experience</a>
                </div>
              </>
            ) : (<></>)
          }
        </div>
        <div className="w-[60%] sm:flex justify-evenly text-buton-green text-md md:text-lg mr-2 h-full hidden">
            <div className="hover:bg-[#286f6c] hover:text-white transition duration-700 cursor-pointer ease-in-out capitalize">
              <a href="#about" className="block h-full w-full p-3">about</a>
            </div>
            <div className="hover:bg-[#286f6c] hover:text-white transition duration-700 cursor-pointer ease-in-out capitalize">
              <a href="#projects" className="block h-full w-full p-3">projects</a>
            </div>
            <div className="hover:bg-[#286f6c] hover:text-white transition duration-700 cursor-pointer ease-in-out capitalize">
              <a href="#contact" className="block h-full w-full p-3">contact</a>
            </div>
            <div className="hover:bg-[#286f6c] hover:text-white transition duration-700 cursor-pointer ease-in-out capitalize">
              <a href="#experience" className="block h-full w-full p-3">experience</a>
            </div>
        </div>
 
      </div>
    </div>
  );
}

export default Navbar;
