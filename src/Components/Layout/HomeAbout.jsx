import React from "react";
import "./HomeAbout.css";
import about from "../../Assets/homeabout2.jpg.webp";
const HomeAbout = () => {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img 
            src={about} 
            alt="Solar Installation"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h5>ABOUT SPARE GRID</h5>

          <h2>
            Powering Homes With <span>Clean Solar Energy</span>
          </h2>

          <p>
            Spare Grid Solar Solutions delivers reliable and affordable solar
            energy systems for homes and businesses. We specialize in solar
            panel installation, maintenance, and customized power solutions
            designed to reduce electricity costs and promote sustainable living.
          </p>

          <p>
            Our mission is to help customers switch to renewable energy with
            high-quality products, expert engineering, and long-term energy
            savings.
          </p>

          {/* <div className="about-points">
            <div>✔ High Efficiency Solar Panels</div>
            <div>✔ Expert Installation Team</div>
            <div>✔ Affordable Energy Solutions</div>
            <div>✔ 24/7 Customer Support</div>
          </div> */}

          <button className="about-btn">
            Learn More
          </button>
        </div>

      </div>

    </section>
  );
};

export default HomeAbout;