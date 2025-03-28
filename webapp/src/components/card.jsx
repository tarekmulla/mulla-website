
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
              <div key={ item.title } className="card-item">

                <div className="card-item-image">
                  <img
                    src={CONFIG.IMAGES_URL + item.image}
                    alt="cardImage"
                  />
                </div>

                <div className="card-item-description">
                  <div className="card-item-title">
                    {item.title}
                  </div>
                  <div className="card-item-subtitle">
                  <a href={item.link} target="_blank" rel="noreferrer">{item.subtitle}</a>
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
