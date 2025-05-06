import React from "react";
import { Link } from "react-router-dom";

const CardList = ({ title, items }) => {
  return (
    <div className="card-container">
      <div className="card-info">
        <div className="card">
          <h3 className="card-title">{title}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {/* Eğer item.link varsa tıklanabilir yap */}
                {item.link ? (
                  <Link to={item.link} style={{ textDecoration: "none" }}>
                    {item.text}
                  </Link>
                ) : (
                  item.text // Eğer link yoksa metin sadece gösterilsin
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardList;
