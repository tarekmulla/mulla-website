import React from "react";
import Project from "../components/project";
import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {
  return (
    <React.Fragment>
      <div className="projects-content">
        <div id="projects" className="projects-container">
          <h2 className="subtitle projects-title">
            Recent Projects
          </h2>

          <div className="main-text projects-subtitle">
            I have led and delivered numerous cloud solutions, successfully executing secure cloud migrations, implementing strategic security frameworks, and ensuring compliance with critical industry standards. Below are several recent projects I've contributed to:
          </div>

          <div className="projects-list">
            <div className="all-projects-container">
              {INFO.projects.map((project, index) => (
                <div className="all-projects-project" key={index}>
                  <Project
                    logo={project.logo}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
