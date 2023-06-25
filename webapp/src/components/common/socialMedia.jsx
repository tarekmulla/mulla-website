import React from "react";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./styles/navBar.css";
import INFO from "../../data/user";

import "./styles/socialMedia.css";

const SocialMedia = () => {
  return (
    <React.Fragment><div className="homepage-socials">
    <a
      href={INFO.socials.linkedin}
      target="_blank"
      rel="noreferrer"
    >
    <FontAwesomeIcon
      icon={faLinkedin}
      className="homepage-social-icon"
    />
    </a>
    <a
      href={INFO.socials.twitter}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        icon={faTwitter}
        className="homepage-social-icon"
      />
    </a>
    <a
      href={INFO.socials.github}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        icon={faGithub}
        className="homepage-social-icon"
      />
    </a>
    <a
      href={`mailto:${INFO.main.email}`}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        icon={faMailBulk}
        className="homepage-social-icon"
      />
    </a>
  </div>
</React.Fragment>
  );
};

export default SocialMedia;
