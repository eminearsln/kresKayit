import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img className="navbar-logo" src="./src/img/logoo.png" alt="logo" />
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Ana Sayfa
          </Link>
        </li>
        <li onClick={toggleSubMenu} className="dropdown">
          Okulumuz▼
          <ul className={`submenu ${showSubMenu ? "active" : ""}`}>
            <li>
              <Link to="/tarihce" onClick={closeMenu}>
                Tarihçemiz
              </Link>
            </li>
            <li>
              <Link to="/siniflarimiz" onClick={closeMenu}>
                Sınıflarımız
              </Link>
            </li>
            <li>
              <Link to="/yemekhane" onClick={closeMenu}>
                Yemekhane
              </Link>
            </li>
            <li>
              <Link to="/misyonumuz" onClick={closeMenu}>
                Misyonumuz
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/kadromuz" onClick={closeMenu}>
            Kadromuz
          </Link>
        </li>
        <li>
          <Link to="/iletisim" onClick={closeMenu}>
            İletişim
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
