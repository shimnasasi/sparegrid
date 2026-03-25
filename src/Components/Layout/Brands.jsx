import React from "react";
import "./Brands.css";

import hykon from "../../Assets/hykon.jpg";
import livguard from "../../Assets/livguard.png";
import utl from "../../Assets/utl.png";
import exide from "../../Assets/exide.png";
import luminous from "../../Assets/luminous.jpg";
import amaron from "../../Assets/amaron.png";
import microtek from "../../Assets/microtek.png";
import kent from "../../Assets/kent.png";
import lagnuvo from "../../Assets/lagnuvo.png";
import havells from "../../Assets/havells.jpg"
import vguard from "../../Assets/vguard.png"
import adhani from "../../Assets/Adani-Solar.png"
import waree from "../../Assets/waree-solar.jpg"
const Brands = () => {
  return (
    <section className="brands-section">

      <div className="brands-container">

        {/* HEADER */}
        <div className="brands-header">

          <span className="brands-tag">
            TRUSTED PARTNERS
          </span>

          <h2>
            Brands We Work With
          </h2>

          <p>
            We collaborate with leading energy and electrical brands to deliver
            reliable solar products and advanced power solutions for homes and businesses.
          </p>

        </div>

        {/* LOGOS */}
        <div className="brands-slider">
          <img src={hykon} alt="Hykon" />
          <img src={livguard} alt="Livguard" />
          <img src={utl} alt="UTL" />
          <img src={exide} alt="Exide" />
          <img src={luminous} alt="Luminous" />
          <img src={amaron} alt="Amaron" />
          <img src={microtek} alt="Microtek" />
          <img src={kent} alt="Kent" />
          <img src={lagnuvo} alt="Lagnuvo" />
             <img src={havells} alt="havells" />
               <img src={vguard} alt="vguard" />
                <img src={adhani} alt="adhani" />
                 <img src={waree} alt="waree" />
        </div>

      </div>

    </section>
  );
};

export default Brands;