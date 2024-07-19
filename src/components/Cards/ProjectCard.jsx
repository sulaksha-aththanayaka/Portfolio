import React from "react";
import software from "../../assets/softwareProject.png";
import { Link } from "react-router-dom";

function ProjectCard({ id, tech, title, img, name, intro }) {
  const handleBorderColor = (id) => {
    if (id % 3 === 1) {
      return "border-[#b0aac0]";
      //   return 'border-[#f9d5e5]';
    } else if (id % 3 === 2) {
      // Corrected the logic to use modulo 3
      return "border-[#c2d4dd]";
      //   return 'border-[#eeac99]';
    } else {
      return "border-[#ddeedd]";
      //   return 'border-[#e06377]';
    }
  };

  return (
    <div>
      <div className="bg-[#f8f7f1] px-10 sm:px-[10vw] py-5">
        <div
          className={`px-2 sm:px-0 sm:flex items-center ${handleBorderColor(
            id
          )} border-8 text-lg bg-white rounded-3xl`}
        > 
          <div className="px-2 py-5 sm:p-10 sm:w-[40%]">
            <img src={img} className="rounded"/>
          </div>
          <div className="sm:py-5 p-2 text-sm sm:text-xl sm:w-[60%] justify-center flex flex-col">
            <div className="p-1 sm:p-2">
              <h1 className="text-xl sm:text-3xl font-bold">{name}</h1>
            </div>
            <div className="p-1 sm:p-2">
              <p className="">{intro}</p>
            </div>
            <div className="flex sm:justify-normal justify-center">
              {Object.keys(tech).map((key) => (
                <img key={key} src={tech[key]} alt={`Tech ${key}`} className="m-2 w-[20px] sm:w-[50px] "/>
              ))}
            </div>
            <div className="text-white p-2 sm:p-2 flex justify-center sm:justify-normal">
              <button className="bg-button-green p-2 rounded-lg hover:bg-[#1d4e4b]">
                <Link to={`/Portfolio/${title}`}>Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
