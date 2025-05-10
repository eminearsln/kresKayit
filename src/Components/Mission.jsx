import React from "react";
import "./mission.css";

const Mission = () => {
  return (
    <div
      className="mission-wrapper"
      style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        gap: "40px",
        padding: "40px",
        flexWrap: "wrap",
      }}
    >
      <div className="mission-container">
        <h2 className="mission-title">Misyonumuz</h2>
        <p className="mission-text">
          Kreşimiz olarak en büyük amacımız, çocuklarımızın güvenli, sevgi dolu
          ve gelişimlerine uygun bir ortamda büyümelerini sağlamaktır. Her bir
          çocuğun bireysel farklılıklarını, ilgi alanlarını ve öğrenme hızını
          dikkate alarak; onların fiziksel, bilişsel, duygusal ve sosyal
          gelişimlerini en üst düzeyde destekleyen bir eğitim ortamı sunuyoruz.
        </p>
        <p className="mission-text">
          Eğitim anlayışımız; çocuklarımızın merak duygusunu canlı tutan,
          öğrenmeyi eğlenceli ve anlamlı hale getiren, özgüvenlerini pekiştiren
          ve iletişim becerilerini geliştiren etkinliklerle şekillenmektedir.
          Oyun temelli öğrenme yaklaşımımızla çocuklarımızın hem eğlenmesini hem
          de öğrenmesini hedefliyoruz.
        </p>
        <p className="mission-text">
          Ailelerle kurduğumuz açık ve güçlü iletişim sayesinde, her çocuğun
          gelişim sürecini birlikte takip ediyor, aileyi sürecin aktif bir
          parçası haline getiriyoruz. Çünkü biliyoruz ki, bir çocuğun
          gelişiminde en büyük rolü oynayan etkenlerden biri, aile ile kurulan
          sağlıklı iş birliğidir.
        </p>
        <p className="mission-text">
          Modern, hijyenik ve güvenli fiziki koşullara sahip olan kreşimizde,
          alanında uzman ve çocuk gelişimi konusunda eğitimli bir kadroyla
          çalışıyoruz. Çocuklarımıza değer veren, onları dinleyen, onlarla bağ
          kuran ve her zaman yanlarında olan bir ekip olarak; onların
          kendilerini değerli hissetmeleri, bağımsız bireyler olarak yetişmeleri
          ve mutlu çocukluk anıları biriktirmeleri için var gücümüzle
          çalışıyoruz.
        </p>
        <p className="mission-text">
          Geleceğin bireylerini yetiştirirken en temel rehberimiz; sevgi, saygı,
          güven ve sorumluluk ilkelerimizdir. Biz, sadece çocuklara değil, bir
          toplumun geleceğine de yatırım yaptığımızın bilincindeyiz.
        </p>
      </div>
      <div className="mission-img">
        <img src="./src/img/etkinlik.jpg" alt="" />
      </div>
    </div>
  );
};

export default Mission;
