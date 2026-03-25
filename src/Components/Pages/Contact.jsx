import React from "react";
import Layout from "../Layout/Layout";
import "./Contact.css";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

const Contact = () => {
  return (
    <Layout>

      <div className="contact-container">
        
        {/* ================= FIRST ROW ================= */}
        <div className="first-row">
          <div className="contact">
            <div className="contactus">CONTACT US</div>

            <div className="get">
              Get In Touch With <br /> <span>SPARE GRID</span>
            </div>

            <p>
              Get in touch with us for solar installation, consultation, or any queries.
              We are here to help you switch to clean and sustainable energy.
            </p>
          </div>

          <div className="card">
            <div className="bluecard">
              <GrLocation className="location" />
              <div className="our-location">Our Location</div>
              <div className="location-para">
                Kuttiyadi Mullankunnu Road <br />
                Kozhikode 673513, Kerala, India
              </div>
            </div>

            <div className="whitecard">
              <BsTelephone className="phone" />
              <div className="phonenumber">Phone Number</div>
              <div className="location-paraphone">
                +91 90486 66336
              </div>
            </div>

            <div className="bluecard">
              <MdOutlineEmail className="location" />
              <div className="our-location">Email Us</div>
              <div className="location-para">
                sparegrid@gmail.com
              </div>
            </div>

            <div className="whitecard">
              <FaRegClock className="phone" />
              <div className="phonenumber">Working Hours</div>
              <div className="location-paraphone">
                Monday - Saturday <br />
                9 AM - 7 PM
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECOND ROW ================= */}
        <div className="second-row">
          <div className="message">
            <h2>
              Power Your Future With <span>Solar Energy</span>
            </h2>
            <p>
              Contact Spare Grid for installation, consultation, and customized
              solar solutions tailored to your needs.
            </p>
          </div>

          <form>
            <div className="form-container">
              <div className="input-wrapper">
                <input className="input" placeholder="First Name" type="text" />
                <input className="input" placeholder="Your Email" type="email" />
              </div>

              <div className="input-wrapper">
                <input className="input" placeholder="Subject" type="text" />
                <input className="input" placeholder="Your Number" type="text" />
              </div>

              <textarea
                className="textarea"
                placeholder="Message"
              ></textarea>

              <button>Send Your Message</button>
            </div>
          </form>
        </div>

        {/* ================= THIRD ROW ================= */}
        <div className="third-row">
          <h1 className="googlemap">
            Find Us On <br /> Google Maps
          </h1>

          <p>
            Easily locate us using Google Maps and find the best route to reach us.
          </p>

          <div className="mapwrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.707516839029!2d75.79373249999999!3d11.644178799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba67f510cbbef3f%3A0x1a108aa1289b0d02!2sSpareGrid%20Associates!5e0!3m2!1sen!2sin!4v1772198720611!5m2!1sen!2sin"
              className="Contactmap"
              title="SpareGrid Location"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

    </Layout>
  );
};

export default Contact;