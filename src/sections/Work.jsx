"use client";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import "./sectioncss/work.css";
const Work = () => {
  const [active, setActive] = useState("WebsiteDesigns");
  const choices = [
    "WebsiteDesigns",
    "Social Media",
    "VideoCreation",
    "SEO Content",
    "Paid Ads",
    "Logo Designs",
  ];

  return (
    <div className="choice-continer">
      <div className="pain-header">
        <h1 className="pain-title">Our work</h1>
      </div>

      <div>
        <div className="business-section">
          {choices.map((choice) => (
            <div
              key={choice}
              className={`business-card ${active === choice ? "active" : ""}`}
              onClick={() => setActive(choice)}
            >
              <p className="business-title">{choice}</p>
            </div>
          ))}
        </div>

        <div className="project-container">
          <div className="left-section">
            <div className="image-group">
              <img src="./wefab.png" alt="wefab" />
              <img src="./fire.png" alt="fire" />
            </div>

            <div className="button-wrapper">
              <button type="submit" className="project-button">
                Get your Website Done <GoArrowRight />
              </button>
            </div>
          </div>

          <div className="right-section">
            <img src="./proqshot.png" alt="project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
