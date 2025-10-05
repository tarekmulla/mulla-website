import React from "react";

import "./styles/skills.css";

import CONFIG from "../data/config";

const Skills = () => {
  const skillsTag = ["Cloud", "Cybersecurity", "Leadership", "DevOps", "Consulting", "IaC",
  "AWS", "Azure", "Risk-Analysis", "Stakeholder-Engagement", "Public-Speaking" ];

  return (
    <div className="skills-container" >
      <div className="skills">
        <p>My top skills:</p>
        <ul className="skills-list">
          {skillsTag.map((item) => (
            <li key={ item } className="skill-tag">{item}</li>
          ))}
        </ul>
      </div>

      <div className="about-banner-container">
        <p>Currently I hold the below certifications, you can check the full list of badges in&nbsp;
          <a href="https://www.credly.com/users/tarek-mulla/badges">Credly</a>
        .</p>
        <a href="https://www.credly.com/users/tarek-mulla/badges">
          <img
            src={CONFIG.IMAGES_URL + "certs.webp"}
            alt="banner-certificate"
            className="about-image"
          />
        </a>
      </div>
    </div>
  );
};

export default Skills;
