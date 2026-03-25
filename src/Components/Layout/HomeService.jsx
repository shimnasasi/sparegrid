import React from "react";
import "./HomeService.css";

import ongridoffgrid from "../../Assets/ongridoffgrid.jpg";
import solarled from "../../Assets/solarled.png";
import servo from "../../Assets/servo.png";
import solarstreet from "../../Assets/solarstreetlight.jpg";
import water from "../../Assets/water.jpg";
import cctv from "../../Assets/cctv.jpg"
import solarwaterheater from "../../Assets/solarwaterheater.png"
import electrical from "../../Assets/electrical.png"
import hybridsolarplant from "../../Assets/HybridSolar.webp"

const services = [
  {
    title: "On Grid & Off Grid Solar Inverters",
    image: ongridoffgrid,
    desc: "Efficient solar inverter systems designed for both grid-connected and independent power solutions."
  },
  {
    title: "Solar LED High Mast",
    image: solarled,
    desc: "High-performance LED lighting systems ideal for large outdoor areas and industrial spaces."
  },
  {
    title: "Water Purifier",
    image: water,
    desc: "Advanced purification systems ensuring safe and clean drinking water for homes and businesses."
  },
  {
    title: "Hybrid Solar Power Plant",
    image: hybridsolarplant,
    desc: "Hybrid solar solutions that combine grid power and battery storage for uninterrupted energy."
  },
  {
    title: "Solar Street Light",
    image: solarstreet,
    desc: "Energy-efficient solar street lighting designed for roads, campuses, and public spaces."
  },
  {
    title: "Solar Water Heater",
    image: solarwaterheater,
    desc: "Eco-friendly solar water heating systems that reduce electricity consumption."
  },
  {
    title: "Servo Stabilizer & Batteries",
    image: servo,
    desc: "Reliable voltage stabilizers and battery systems to protect electrical equipment."
  },
  {
    title: "Electrical Maintenance",
    image:electrical,
    desc: "Professional electrical maintenance services ensuring safety and system reliability."
  },
  {
    title: "CCTV",
    image: cctv,
    desc: "Smart surveillance systems designed to enhance security for homes and businesses."
  }
];

const HomeService = () => {
  return (
    <section className="services">

      <div className="service-header">
        <span className="service-tag">OUR SOLUTIONS</span>

        <h2>
          Smart Solar & Energy Solutions
        </h2>

        <p>
          We provide advanced solar and electrical solutions designed
          to improve energy efficiency and sustainability for homes
          and businesses.
        </p>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-img">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default HomeService;