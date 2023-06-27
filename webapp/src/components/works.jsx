import React from "react";
import { FaBriefcase } from "react-icons/fa";
import CONFIG from "../data/config";

import "./styles/works.css";

const Works = () => {
  return (
    <div className="works">
      <div className="card">
      <div className="card-container">
        <div className="card-header">
          <div className="card-icon">
            <FaBriefcase />
          </div>
          <div className="card-title">Work Experience</div>
        </div>
        <div className="card-body">
          <div className="card-text">
            <div className="works-body">
              <div className="work">
                <img
                  src={CONFIG.IMAGES_URL + "cevo-logo.webp"}
                  alt="cevo"
                  className="work-image"
                  />
                <a className="work-title" href="https://Cevo.com.au" target="_blank" rel="noreferrer">Cevo</a>
                <div className="work-subtitle">
                  Cloud\DevSecOps consultant
                </div>
                <div className="work-duration">2023 - Present</div>
              </div>

              <div className="work">
                <img
                  src={CONFIG.IMAGES_URL + "ciandt-logo.jpeg"}
                  alt="ciandt"
                  className="work-image"
                />
                <a className="work-title" href="https://ciandt.com" target="_blank" rel="noreferrer">CI&T</a>
                <div className="work-subtitle">
                  Lead Cloud Engineer
                </div>
                <div className="work-duration">2022 - 2023</div>
              </div>

              <div className="work">
                <img
                  src={CONFIG.IMAGES_URL + "iress-logo.png"}
                  alt="Iress"
                  className="work-image"
                  />
                <a className="work-title" href="https://Iress.com" target="_blank" rel="noreferrer">Iress</a>
                <div className="work-subtitle">
                  Engineer
                </div>
                <div className="work-duration">2019 - 2022</div>
                </div>

              <div className="work">
                <img
                  src={CONFIG.IMAGES_URL + "compuleader-logo.jpeg"}
                  alt="Compuleader"
                  className="work-image"
                  />
                <a className="work-title" href="https://Compu-leader.com" target="_blank" rel="noreferrer">Compuleader</a>
                <div className="work-subtitle">
                  Engineer
                </div>
                <div className="work-duration">2015 - 2018</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Works;
