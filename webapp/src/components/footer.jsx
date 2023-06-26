import React from "react";

import SocialIcons from "./socialIcons";
import "./styles/footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-links">
          <ul className="footer-nav-link-list">
            <li className="footer-nav-link-item">
              <a href="#about">About me</a>
            </li>
            <li className="footer-nav-link-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="footer-nav-link-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <SocialIcons />

        <div className="footer-credits">
          <div className="footer-credits-text">
            © 2023 <a href="https://mulla.au">mulla.au</a> All Rights Reserved.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
