import React, { useState, useEffect } from "react";
import "./Slider.css"; // CSS'yi unutma

const images = [
  "./src/img/canakale.jpeg",
  "./src/img/bilgi-yarismasi.jpg",
  "./src/img/etkinlik.jpg",
  "./src/img/home3.jpg",
  "./src/img/etkinlik2.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt="slider" className="slider-image" />

      {/* Dot Navigation */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
