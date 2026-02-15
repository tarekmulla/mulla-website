import React from "react";

import SocialMedia from "./socialMedia";
import Card from "./card";
import Skills from "./skills";

import INFO from "../data/user";
import CONFIG from "../data/config";


import { FaUniversity, FaSuitcase } from "react-icons/fa";

import "./styles/about.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="about-content">
          <div id="about" className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <p className="main-text about-initial">
                  Hello, I am
                </p>
                <h1 className="title about-title">
                  {INFO.about.title}
                </h1>

                <p className="main-text about-subtitle">
                {INFO.about.description1}
                <br/>
                {INFO.about.description2}
                <br/>
                {INFO.about.description3}
                </p>

                <Card
                  title="Work Experience"
                  icon={ <FaSuitcase />}
                items_list={[
                  {image: "cisco-logo.webp", link:"https://www.cisco.com/", subtitle:"Cisco Systems - Duo Security", title:"Engineering Manager", duration:"2025 - Current"},
                  {image: "vic-gov-logo.webp", link:"https://www.deeca.vic.gov.au/", subtitle:"Department of Energy, Environment and Climate Action", title:"Senior Security Advisor", duration:"2025 - 2025"},
                  {image: "cevo-logo.webp", link:"https://Cevo.com.au", subtitle:"Cevo", title:"Senior Cloud & Cybersecurity Consultant", duration:"2023 - 2025"},
                  {image: "ciandt-logo.webp", link:"https://ciandt.com", subtitle:"CI&T", title:"Lead Cloud Engineer", duration:"2022 - 2023"},
                  {image: "iress-logo.webp", link:"https://iress.com", subtitle:"Iress", title:"Cloud Engineer", duration:"2019 - 2022"},
                  {image: "compuleader-logo.webp", link:"https://compu-leader.com", subtitle:"Compu-leader", title:"Software Engineer", duration:"2015 - 2018"}
                ]} />

                <Card
                  title="Education"
                  icon={ <FaUniversity />}
                items_list={[
                  {image: "mbs-logo.webp", link:"https://online.mbs.edu/", subtitle:"Melbourne Business School", title:"Master of Business Administration", duration:"2024 - 2025"},
                  {image: "rmit-logo.webp", link: "https://www.rmit.edu.au/", subtitle: "RMIT", title: "Master of Cyber Security", duration: "2023 - 2024" },
                  {image: "tishreen-university-logo.webp", link:"https://tishreen.edu.sy/", subtitle:"Tishreen University", title:"Bachelor's Degree, Computers & Automation Engineering", duration:"2009 - 2014"}
                ]} />
              </div>


              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img
                      src={CONFIG.IMAGES_URL + "tarek-mulla.webp"}
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

              </div>
            </div>
          </div>
          <div className="about-skills mobile-tag">
              <Skills />
          </div>
      </div>
    </React.Fragment>
  );
};

export default About;
