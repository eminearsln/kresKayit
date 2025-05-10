import React from "react";
import "./Yemekhane.css";

const Yemekhane = () => {
  return (
    <div className="yemekhane-container">
      <h1 className="yemekhane-title">Yemekhanemiz</h1>

      <p className="yemekhane-text">
        Okulumuzun yemekhane hizmeti, öğrencilerimizin sağlıklı ve dengeli
        beslenmesini esas alır. Hijyen kurallarına titizlikle uyulan
        mutfağımızda, her gün taze ve doğal malzemelerle yemekler
        hazırlanmaktadır.
      </p>

      <img
        className="yemekhane-image"
        src="./src/img/yemekhane1.jpg"
        alt="Yemekhane salonu"
      />

      <p className="yemekhane-text">
        Haftalık olarak hazırlanan yemek listeleri; uzman diyetisyenler
        tarafından, çocukların yaş gruplarına uygun şekilde planlanmaktadır.
        Özel diyet ve alerjen durumu olan öğrencilerimiz için alternatif menüler
        sunulmaktadır 🍐🍎🍌
      </p>

      <img
        className="yemekhane-image"
        src="./src/img/yemekhane2.jpg"
        alt="Yemek menüsü örneği"
      />
    </div>
  );
};

export default Yemekhane;
