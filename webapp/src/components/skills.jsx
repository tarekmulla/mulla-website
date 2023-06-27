import React from "react";

import "./styles/skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="main-text">My top skills:</div>
      <ul className="skills">
        <li className="skill-tag">Cloud</li>
        <li className="skill-tag">Cybersecurity</li>
        <li className="skill-tag">DevOps</li>
        <li className="skill-tag">Programming</li>
        <li className="skill-tag">IaC</li>
        <li className="skill-tag">CI\CD</li>
        <li className="skill-tag">Agile</li>
        <li className="skill-tag">Database</li>
        <li className="skill-tag">AWS</li>
        <li className="skill-tag">Azure</li>
        <li className="skill-tag">Mentoring</li>
        <li className="skill-tag">Communication</li>
      </ul>

    </div>
  );
};

export default Skills;
