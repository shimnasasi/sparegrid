import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
    return (
        <div className="HomeBanner-container">
            <div className="HomeBannerShadow">
                <span className="BannerSmallHead">SPARE GRID</span>
                <h1 className="bannerMainHead">
                    Powering a  Sustainable Future
                </h1>
                <span className="bannerMainPara">
                   At Spare Grid, we deliver reliable and efficient solar energy solutions for homes, businesses, and industries. Our mission is to make clean energy accessible, affordable, and sustainable, helping you reduce costs while protecting the environment.
                </span>
                <br />
                <Link to="mailto:enquiry@mechfusion.in?subject=Mechanical Design Requirement">
                    <button>Switch to Solar Now</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeBanner;
