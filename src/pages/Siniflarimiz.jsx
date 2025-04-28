import React from "react";
import "./Siniflarimiz.css";

const Siniflarimiz = () => {
  const classImages = [
    "./src/img/images1.jpeg",
    "./src/img/images2.jpg",
    "./src/img/images3.JPG",
    "./src/img/images4.jpeg",
    "./src/img/images5.jpeg",
    "./src/img/images6.jpeg",
  ];

  return (
    <div className="siniflarimiz-container">
      <h2>Sınıflarımız</h2>
      <div className="image-grid">
        {classImages.map((src, index) => (
          <div key={index} className="image-item">
            <img src={src} alt={`Sınıf ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Siniflarimiz;
