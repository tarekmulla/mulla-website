import React from "react";

import Project from "./project";

import INFO from "../data/user";

import "./styles/allprojects.css";

const Allprojects = () => {
  return (
    <div>
      <div className="all-projects-container">
        {INFO.projects.map((project, index) => (
          <div className="all-projects-project" key={index}>
            <Project
              logo={project.logo}
              title={project.title}
              description={project.description}
              linkText={project.linkText}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allprojects;
