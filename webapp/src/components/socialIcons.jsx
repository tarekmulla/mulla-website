import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

import INFO from "../data/user";

import "./styles/socialIcons.css";

const SocialIcons = () => {
  return (
    <React.Fragment><div className="common-socials">
    <a
      href={INFO.socials.linkedin}
      target="_blank"
      rel="noreferrer"
    >
    <FaLinkedin className="common-social-icon" />
    </a>
      {/*<a
      href={INFO.socials.twitter}
      target="_blank"
      rel="noreferrer"
      >
        <FaTwitter className="common-social-icon" />
    </a>*/}
    <a
      href={INFO.socials.github}
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub className="common-social-icon" />
    </a>
    <a
      href={`mailto:${INFO.main.email}`}
      target="_blank"
      rel="noreferrer"
    >
      <FaEnvelope className="common-social-icon" />
    </a>
  </div>
</React.Fragment>
  );
};

export default SocialIcons;
