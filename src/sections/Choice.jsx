"use client";
import React, { useState } from "react";
import "./sectioncss/choice.css";

const Choice = () => {
  const [active, setActive] = useState("Big Business"); // default selected

  const choices = ["Solopreneurs", "Small Business", "Big Business"];

  const features = [
    {
      title: "AI-Powered Website",
      description:
        "Custom landing page that converts visitors into customers. AI-optimized design included.",
    },
    {
      title: "Smart Social Media",
      description:
        "I schedule, create, and post content across all platforms. Never miss engagement.",
    },
    {
      title: "Content That Converts",
      description:
        "AI writes blogs, emails, and copy that ranks on Google and drives sales daily.",
    },
    {
      title: "SEO 2.0 on Autopilot",
      description:
        "AI optimizes your content to rank #1 on Google. Get found by your ideal customers.",
    },
    {
      title: "Smart Ads That Work",
      description:
        "AI manages your PPC campaigns to maximize ROI. More leads, lower costs guaranteed.",
    },
    {
      title: "Marketplace Ads",
      description:
        "AI optimizes Amazon, Flipkart, and marketplace ads for maximum visibility and sales.",
    },
    {
      title: "Authority Building Service",
      description: "AI-crafted thought leadership content.",
    },  ];

  return (
    <div className="choice-continer">
      <div className="pain-header width-choice">
        <h1 className="pain-title">Choose What is Right For You</h1>
      </div>

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

      <div className="choice-feature-section">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`choice-feature-card ${
              feature.isUpgrade ? "feature-upgrade" : ""
            }`}
          >
            {!feature.isUpgrade && (
              <div className="feature-image-wrapper">
                <img
                  className="feature-image"
                  src="/choose.png"
                  alt={feature.title}
                />
              </div>
            )}
            <div className="feature-content">
              <h1 className="feature-title">{feature.title}</h1>
              {feature.description && (
                <p className="feature-description">{feature.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choice;
