import React from "react";

import "./styles/certificates.css";
import CONFIG from "../data/config";

const Certificates = () => {
  return (
    <div className="about-banner-container">
      <div className="main-text">
        <p>Currently I hold the following certifications:</p>

      </div>
      <div className="about-banner-wrapper">
        <img
          src={CONFIG.IMAGES_URL + "banner.png"}
          alt="banner-certificate"
          className="about-image"
        />
      </div>

      <p>You can check the full list of badges in <a href="https://www.credly.com/users/tarek-mulla/badges">Credly</a></p>
    </div>
  );
};

export default Certificates;
