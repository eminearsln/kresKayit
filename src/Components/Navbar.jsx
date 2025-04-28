import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <nav className="navbar">
      <img className="navbar-logo" src="./src/img/logoo.png" alt="" />

      <ul className="navbar-menu">
        <li>
          <Link to="/">Ana Sayfa</Link>
        </li>
        <li onClick={toggleSubMenu} className="dropdown">
          Okulumuz
          <ul className={`submenu ${showSubMenu ? "active" : ""}`}>
            <li>
              <Link to="/tarihce">Tarihçemiz</Link>
            </li>
            <li>
              <Link to="/siniflarimiz">Sınıflarımız</Link>
            </li>
            <li>
              <Link to="/yemekhane">Yemekhane</Link>
            </li>
            <li>
              <Link to="/misyonumuz">Misyonumuz</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/kadromuz">Kadromuz</Link>
        </li>
        <li>
          <Link to="/iletisim">İletişim</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
