import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "./navBar";
import SocialMedia from "./socialMedia";
import Works from "./works";
import Education from "./education";
import Skills from "./skills";
import Certificates from "./certificates";

import INFO from "../data/user";
import CONFIG from "../data/config";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={SEO.description} />
        <meta
          name="keywords"
          content={SEO.keywords.join(", ")}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div id="about" className="justify-content about-container">
            <div className="about-main">
              <div className="about-right-side">
                <p className="main-text about-initial">
                  Hello, I am
                </p>
                <h1 className="title about-title">
                  {INFO.about.title}
                </h1>

                <p className="main-text about-subtitle">
                  {INFO.about.description}
                </p>

                <Works />

                <Education />
              </div>


              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img
                      src={CONFIG.IMAGES_URL + "tarek-mulla.jpg"}
                      alt="about"
                      className="about-image"
                    />
                  </div>
                </div>

                <div className="about-socials">
                  <SocialMedia />
                </div>

                <div className="about-skills desktop-tag">
                  <Skills />
                </div>

                <div className="about-certificates desktop-tag">
                  <Certificates />
                </div>
              </div>
            </div>
          </div>
          <div className="about-skills mobile-tag">
              <Skills />
          </div>

          <div className="about-certificates mobile-tag">
            <Certificates />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
