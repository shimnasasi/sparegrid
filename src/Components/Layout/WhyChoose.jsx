import React from "react";
import "./WhyChoose.css";
import whychoose from "../../Assets/whychoose.jfif";
const WhyChooseSolar = () => {
  return (
    <section className="whychoose-section">

      <div className="overlay"></div>

      <div className="why-container">

        {/* LEFT IMAGE */}
        <div className="why-image">
          <img
            src={whychoose}
            alt="Solar Installation"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="why-content">
          <h2>WHY CHOOSE SPARE GRID ?</h2>

          <ul>
            <li>High-efficiency solar panel installation</li>
            <li>Customized residential & commercial solutions</li>
            <li>Certified engineers & safe installation</li>
            <li>Reduce electricity bills up to 80%</li>
            <li>Complete support & maintenance service</li>
          </ul>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseSolar;