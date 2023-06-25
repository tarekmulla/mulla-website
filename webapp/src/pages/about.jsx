import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";
import Works from "../components/homepage/works";

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
          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <h2 className="title about-title">
                  {INFO.about.title}
                </h2>

                <div className="main-text about-subtitle">
                  {INFO.about.description}
                </div>

                <div className="about-banner-container">
                  <div className="about-banner-wrapper">
                    <img
                      src={CONFIG.IMAGES_URL + "banner.png"}
                      alt="banner-certificate"
                      className="about-image"
                    />
                  </div>
                </div>

                <div className="homepage-works">
                  <Works />
                </div>
              </div>


              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img
                      src={CONFIG.IMAGES_URL + "tarek-mulla-inkpen.jpg"}
                      alt="about"
                      className="about-image"
                    />
                  </div>
                </div>

                <div className="about-socials">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="about-socials-mobile">
              <Socials />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;