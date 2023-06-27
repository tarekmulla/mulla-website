import React from "react";
import { FaUniversity } from "react-icons/fa";
import CONFIG from "../data/config";

import "./styles/education.css";

const Education = () => {
  return (
    <div className="educations">
      <div className="card">
      <div className="card-container">
        <div className="card-header">
          <div className="card-icon">
            <FaUniversity />
          </div>
          <div className="card-title">Education</div>
        </div>
        <div className="card-body">
          <div className="card-text">
            <div className="education-body">
              <div className="education">
                <img
                  src={CONFIG.IMAGES_URL + "rmit-logo.jpg"}
                  alt="cevo"
                  className="education-image"
                  />
                <a className="education-title" href="https://www.rmit.edu.au/" target="_blank" rel="noreferrer">RMIT</a>
                <div className="education-subtitle">
                  Master in Cybersecurity
                </div>
                <div className="education-duration">2023 - Present</div>
              </div>

              <div className="education">
                <img
                  src={CONFIG.IMAGES_URL + "rmit-online-logo.jpg"}
                  alt="Iress"
                  className="education-image"
                  />
                <a className="education-title" href="https://online.rmit.edu.au/" target="_blank" rel="noreferrer">RMIT_Online</a>
                <div className="education-subtitle">
                  Project management for professional Course
                </div>
                <div className="education-duration">2022 - 2022</div>
              </div>

              <div className="education">
                <img
                  src={CONFIG.IMAGES_URL + "tishreen-university-logo.png"}
                  alt="Compuleader"
                  className="education-image"
                  />
                <a className="education-title" href="https://tishreen.edu.sy" target="_blank" rel="noreferrer">Tishreen_University</a>
                <div className="education-subtitle">
                Bachelor's Degree, Computers & Automation Engineering
                </div>
                <div className="education-duration">2009 - 2014</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Education;
