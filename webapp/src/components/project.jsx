import React from "react";
import { FaLink } from "react-icons/fa";

import "./styles/project.css";

const Project = (props) => {
  const { logo, title, description, linkText, link } = props;

  return (
    <React.Fragment>
      <div className="project">
        <a href={link}>
          <div className="project-container">
            <div className="project-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
            <div className="project-link">
              <div className="project-link-icon">
                <FaLink />
              </div>

              <div className="project-link-text">{linkText}</div>
            </div>
          </div>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Project;
