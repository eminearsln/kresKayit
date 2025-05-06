import React from "react";
import Slider from "../components/Slider";
import CardList from "../components/CardList";
import "./HomePage.css";

const announcements = [
  "25 Nisan Perşembe günü çocuklarımızla birlikte bahar pikniğine gidiyoruz!",
  "30 Nisan Salı günü profesyonel fotoğrafçımız sınıflarda çekim yapacaktır.",
  "Mayıs ayı yemek listesi web sitemizde yayınlanmıştır.",
  "“Hayalimdeki Dünya” temalı resim yarışması 6 Mayıs'ta başlıyor!",
  "Her Çarşamba kitap okuma saatleri düzenlenmektedir.",
  "Nisan ayı doğum günü etkinliğimiz 26 Nisan Cuma yapılacaktır.",
  "Bahçemizde yenileme çalışmaları yapılmaktadır.",
];

const news = [
  "Yeni Öğretmenimiz Aramıza Katıldı.",
  "Minik Bahçıvanlar İş Başında!",
  "Çocuklarımızla Samsun Hayvanat Bahçesi'ni ziyaret ettik.",
  "Minik Aşçılar Mutfakta kurabiye yaptı!",
  "Kukla Gösterisi ile keyifli anlar yaşandı.",
  "Aile Katılım Etkinliği büyük ilgi gördü.",
];

const login = [
  { text: "Yönetici Girişi", link: "/admin-giris" }, // Yönetici girişi için link
  { text: "Veli Girişi", link: "/veli-giris" }, // Veli girişi için link
];

function HomePage() {
  return (
    <div>
      <Slider />
      <div className="card-container">
        {/* Duyurular ve Haberler sadece metinler */}
        <CardList
          title="Duyurular"
          items={announcements.map((announcement) => ({ text: announcement }))}
        />
        <CardList
          title="Haberler"
          items={news.map((newsItem) => ({ text: newsItem }))}
        />
        {/* Giriş kısmı tıklanabilir */}
        <CardList title="Giriş" items={login} />
      </div>
    </div>
  );
}

export default HomePage;
