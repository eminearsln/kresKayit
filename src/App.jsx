import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Tarihce from "./Components/Tarihce";
import AdminLogin from "./Components/AdminLogin";
import VeliLogin from "./Components/VeliLogin";
{
  /* VeliLogin bileşenini buraya ekleyeceğiz */
}

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import KadromuzPage from "./pages/KadromuzPage";
import IletisimPage from "./pages/IletisimPage";
import Siniflarimiz from "./pages/Siniflarimiz";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/kadromuz" element={<KadromuzPage />} />
          <Route path="/iletisim" element={<IletisimPage />} />
          <Route path="/tarihce" element={<Tarihce />} />
          <Route path="/siniflarimiz" element={<Siniflarimiz />} />
          <Route path="/admin-giris" element={<AdminLogin />} />
          <Route path="/veli-giris" element={<VeliLogin />} />{" "}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
