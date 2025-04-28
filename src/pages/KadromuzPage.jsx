import React from "react";
import "./Kadromuz.css";

const ogretmenler = [
  {
    isim: "Ayşe Demir",
    unvan: "Müdür",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Mehmet Yılmaz",
    unvan: "Müdür Yardımcısı",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Zeynep Kaya",
    unvan: "Resim Öğretmeni",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Ali Can",
    unvan: "Müzik Öğretmeni",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Fatma Uslu",
    unvan: "İngilizce Öğretmeni",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Ahmet Koç",
    unvan: "Sınıf Öğretmeni",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Elif Nur",
    unvan: "Drama Öğretmeni",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Cemal Tuncel",
    unvan: "Beden Eğitimi",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Selin Aydın",
    unvan: "Okul Psikoloğu",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Canan Şahin",
    unvan: "Anaokulu Öğretmeni",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Murat Öz",
    unvan: "Sınıf Öğretmeni",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Yasemin Tekin",
    unvan: "Drama Öğretmeni",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Hülya Arslan",
    unvan: "Sınıf Öğretmeni",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Tuncay Uğur",
    unvan: "Spor Eğitmeni",
    img: "https://via.placeholder.com/150",
  },
  {
    isim: "Gülşah Kır",
    unvan: "Müzik Öğretmeni",
    img: "https://via.placeholder.com/150",
  },
];

const Kadromuz = () => {
  return (
    <div className="kadro-container">
      {ogretmenler.map((ogretmen, index) => (
        <div className="kadro-card" key={index}>
          <img src={ogretmen.img} alt={ogretmen.isim} />
          <h3>{ogretmen.isim}</h3>
          <p>{ogretmen.unvan}</p>
        </div>
      ))}
    </div>
  );
};

export default Kadromuz;
