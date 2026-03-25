import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-box">
          <h2>Spare Grid</h2>
          
          <p>Kuttiyadi Mullankunnu Road,</p>
          <p>Kozhikode 673513, Kerala, India</p>
          
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/services">Services</Link></li> */}
            {/* <li><Link to="/projects">Projects</Link></li> */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-box">
          <h3>Services</h3>
          <ul>
            <li>Solar Power Systems</li>
            <li>Solar Lighting Solutions</li>
            <li>Power Backup & Batteries</li>
            <li>Water Purification Systems</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>Email: Sparegrid@gmail.com</p>
          <p>Phone: +91 90486 66336 </p>
          <p>Kozhikode, India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Spare Grid. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;