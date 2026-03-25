import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/logo2.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        {/* Menu */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/about">about</Link></li> */}
          {/* <li><Link to="/service">Services</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>
    </nav>
  );
};

export default Navbar;