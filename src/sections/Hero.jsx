import React from "react";
import "../sections/sectioncss/hero.css";
import HeroButton from "@/ui/HeroButton";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wraper">
        <div className="hero-text">
          <p className="hero-line">AI-powered</p>
          <p className="hero-line">Marketing That</p>
          <p className="hero-line">Actually Converts</p>
        </div>

        <div className="hero-btn-wrapper">
           <HeroButton/>
        </div>
        <div className="tails">
          <div className="hero-tails">
            <p className="hero-tails-category">Healthcare</p>
            <p className="hero-tails-percent">150%</p>
            <p className="hero-tails-description">
              Increase in online sales for <span>Nipura</span>
            </p>
          </div>
          <div className="hero-tails">
            <p className="hero-tails-category">Fashion and Lifestyle</p>
            <p className="hero-tails-percent">220%</p>
            <p className="hero-tails-description">
              Increase Lead quality for the <span>Health village</span>
            </p>
          </div>
          <div className="hero-tails">
            <p className="hero-tails-category">B2B SAAS</p>
            <p className="hero-tails-percent">65%</p>
            <p className="hero-tails-description">
              Increase in Traffic for <span>ProQsmart</span> in USA
            </p>
          </div>
          <div className="hero-tails">
            <p className="hero-tails-category">E-commerce</p>
            <p className="hero-tails-percent">85%</p>
            <p className="hero-tails-description">
              Increase growth for <span>Kerala Ayurveda</span> and India Business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
