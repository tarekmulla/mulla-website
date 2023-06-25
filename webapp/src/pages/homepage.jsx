import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import SocialMedia from "../components/common/socialMedia";
import Allprojects from "../components/projects/allprojects";

import INFO from "../data/user";
import CONFIG from "../data/config";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={SEO.description} />
        <meta
          name="keywords"
          content={SEO.keywords.join(", ")}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  {INFO.homepage.title}
                </div>

                <div className="main-text homepage-subtitle">
                  {INFO.homepage.description}
                </div>
              </div>

              <div className="homepage-first-area-right-side">
                <div className="homepage-image-container">
                  <div className="homepage-image-wrapper">
                    <img
                      src={CONFIG.IMAGES_URL + "tarek-mulla-camera.jpg"}
                      alt="homepage"
                      className="homepage-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <SocialMedia />

            <div className="homepage-projects">
              <div className="subtitle">
                Recent projects I worked on
              </div>
              <Allprojects />
            </div>

            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
