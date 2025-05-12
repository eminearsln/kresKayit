import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminEmail = "admin@kres.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/admin-dashboard");
    } else {
      setError("Email veya şifre hatalı.");
    }
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default AdminLogin;
