import React from "react";
import {
  //FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

import INFO from "../data/user";

import "./styles/socialMedia.css";

const SocialMedia = () => {
  return (
    <div className="socials">
      <div className="socials-column">
        {/*<div className="social">
          <FaTwitter className="social-icon"/>
          <a className="social-text" href={INFO.socials.twitter} target="_blank" rel="noreferrer">
            Twitter account
          </a>
        </div>*/}

        <div className="social">
        <FaGithub className="social-icon"/>
          <a className="social-text" href={INFO.socials.github} target="_blank" rel="noreferrer">
          GitHub profile
          </a>
        </div>
      </div>

      <div className="socials-column">
        <div className="social">
          <FaLinkedin className="social-icon"/>
          <a className="social-text" href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
          LinkedIn profile
          </a>
        </div>

        <div className="social">
          <FaEnvelope className="social-icon"/>
          <a className="social-text" href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
          {INFO.main.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
