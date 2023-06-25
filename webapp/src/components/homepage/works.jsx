import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
          <div className="works-body">
            <div className="work">
              <img
                src="https://cevo.com.au/wp-content/uploads/2021/09/icon.png"
                alt="cevo"
                className="work-image"
              />
              <div className="work-title">Cevo</div>
              <div className="work-subtitle">
                Cloud\DevSecOps consultant
              </div>
              <div className="work-duration">2023 - Present</div>
            </div>

            <div className="work">
              <img
                src="https://ciandt.com/themes/custom/ciandt_theme/logo.svg"
                alt="ciandt"
                className="work-image"
              />
              <div className="work-title">CI&T</div>
              <div className="work-subtitle">
                Lead Cloud Engineer
              </div>
              <div className="work-duration">2022 - 2023</div>
            </div>
            <div className="work">
              <img
                src="https://www.iress.com/static/assets/images/logo-white-green.987067a3.svg"
                alt="Iress"
                className="work-image"
              />
              <div className="work-title">Iress</div>
              <div className="work-subtitle">
                Engineer
              </div>
              <div className="work-duration">2019 - 2022</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;
