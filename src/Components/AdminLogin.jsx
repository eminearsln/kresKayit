import React, { useState } from "react";
import "./AdminLogin.css"; // İstersen stil ayrı dosyada olsun

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yönetici Giriş Bilgileri:", { email, password });
    // Buraya API çağrısı veya veritabanı bağlantısı ekleyeceğiz
  };

  return (
    <div className="login-container">
      <h2>Yönetici Girişi</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          placeholder="admin@ornek.com"
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

export default AdminLogin;
