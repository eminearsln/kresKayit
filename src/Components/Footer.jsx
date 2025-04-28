import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../img/logoo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column logo-column">
          <img src={logo} alt="Kreş Logo" className="footer-logo" />
        </div>
        <div className="footer-column">
          <h4>Hakkımızda</h4>
          <ul>
            <li>Kreşimiz Kimdir?</li>
            <li>Eğitim Yaklaşımımız</li>
            <li>Vizyon & Misyon</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Programlar</h4>
          <ul>
            <li>0-2 Yaş Grubu</li>
            <li>3-4 Yaş Grubu</li>
            <li>5-6 Yaş Grubu</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>İletişim</h4>
          <ul>
            <li>Müşteri Hizmetleri</li>
            <li>Bize Ulaşın</li>
            <li>Görüşlerinizi Paylaşın</li>
          </ul>
        </div>
        <div className="footer-column2">
          <h4>Bizi Takip Edin</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Özlem Anaokulu Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
