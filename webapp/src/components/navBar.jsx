import React from "react";

import "./styles/navBar.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#about">About me</a>
              </li>
              {/*<li className="nav-item">
                <a href="#projects">Projects</a>
              </li>*/}
              <li className="nav-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
