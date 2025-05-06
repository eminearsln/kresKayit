import React, { useState } from "react";
import "./VeliLogin.css"; // Stil dosyasını eklemeyi unutma

const VeliLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Veli Giriş Bilgileri:", { email, password });
    // Burada da API çağrısı veya veritabanı bağlantısı yapabilirsin
  };

  return (
    <div className="login-container">
      <h2>Veli Girişi</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          placeholder="veli@ornek.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Şifre:</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default VeliLogin;
