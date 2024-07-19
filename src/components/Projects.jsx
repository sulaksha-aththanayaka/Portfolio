import React from "react";
import software from "../assets/softwareProject.png";
import ProjectCard from "./Cards/ProjectCard";
import projects from "../projects/projects";

function Projects() {
  return (
    <div id="projects" className="bg-green-400 mt-28 sm:mt-0">
      {
        projects.map((project, index) => (
          <ProjectCard id={project.id} tech={project.tech} title={project.title} img={project.img} name={project.name} intro={project.intro} key={index}/>
        ))
      }
    </div>
  );
}

export default Projects;