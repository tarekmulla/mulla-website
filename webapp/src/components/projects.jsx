import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/navBar";
import Allprojects from "../components/allprojects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={SEO.description} />
        <meta
          name="keywords"
          content={SEO.keywords.join(", ")}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div id="projects" className="projects-container">
            <h2 className="subtitle projects-title">
              Recent Projects
            </h2>

            <div className="main-text projects-subtitle">
              I have gained extensive experience in designing, developing, and automating large-scale projects using the latest tools and techniques. Below, you'll find a list of some recent projects I have worked o
            </div>

            <div className="projects-list">
              <Allprojects />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;