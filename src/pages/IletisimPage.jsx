import React from "react";
import "./Iletisim.css";
const IletisimPage = () => {
  return (
    <div className="contact-container">
      <h2>İletişim</h2>
      <div className="contact-info">
        <p>
          <strong>📞 Telefon:</strong> 0555 123 45 67
        </p>
        <p>
          <strong>📧 E-posta:</strong> bilgi@kresimiz.com
        </p>
        <p>
          <strong>📷 Instagram:</strong>
          {""}
          <a
            href="https://www.instagram.com/ozlemanaokullari "
            target="_blank"
            rel="noopener noreferrer"
          >
            @kresimiz
          </a>
        </p>
        <p>
          <strong>🏫 Adres:</strong> Tekerek Mahallesi, Kahramanmaraş / Türkiye
        </p>
      </div>
    </div>
  );
};

export default IletisimPage;
