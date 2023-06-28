
import React from "react";

import CONFIG from "../data/config";

import "./styles/card.css";

const Card = (props) => {
  const { title, icon, items_list } = props;

  return (
    <React.Fragment>
      <div className="card-container">
        <div className="card-box">

          <div className="card-header">
            <div className="card-icon">
              {icon}
            </div>
            <div className="card-title">{ title }</div>
          </div>

          <div className="card-body">
            {items_list.map((item) => (
              <div className="card-item">

                <div className="card-item-image">
                  <img
                    src={CONFIG.IMAGES_URL + item.image}
                    alt="cardImage"
                  />
                </div>

                <div className="card-item-description">
                  <div className="card-item-title">
                    <a href={item.link} target="_blank" rel="noreferrer">
                    {item.title}
                    </a>
                  </div>
                  <div className="card-item-subtitle">
                    {item.subtitle}
                  </div>
                </div>

                <div className="card-item-duration">
                  {item.duration}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
  </React.Fragment>
  );
};

export default Card;
