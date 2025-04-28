import React from "react";

const CardList = ({ title, items }) => {
  return (
    <div className="card-container">
      <div className="card-info">
        <div className="card">
          <h3 className="card-title">{title}</h3>
          <ul>
            {items.map((text, index) => (
              <li key={index}>
                <a href="/">{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardList;
