import React from "react";
import "./sectioncss/client.css";

const Client = () => {
  return (
    <div className="pain-section">
      {/* Header */}
      <div className="pain-header">
        <h1 className="pain-title">Get more with dimag</h1>
      </div>

      {/* Content */}
      <div className="bento-continer">
        <div className="horizontal-cards">
          <div className="pain-content">
            {/* Image Section */}
            <div className="client-image-wrapper">
              <img
                src="/clientone.png"
                alt="AI Marketing Analysis"
                className="client-image"
              />
            </div>

            {/* Text Section */}
            <div className="client-text-wrapper">
              <h2 className="client-feature-title">AI Marketing Analysis</h2>
              <p className="client-feature-description">
                Deep competitor research and audience insights using AI tools.
                Know your market before you move.
              </p>
            </div>
          </div>
          <div className="pain-content">
            {/* Image Section */}
            <div className="client-image-wrapper">
              <img
                src="/clienttwo.png"
                alt="AI Marketing Analysis"
                className="client-image"
              />
            </div>

            {/* Text Section */}
            <div className="client-text-wrapper">
              <h2 className="client-feature-title">Creative Design Hub</h2>
              <p className="client-feature-description">
                AI-assisted graphics for social media, ads, and print. Canva,
                Photoshop, and Illustrator included.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="pain-content-vertical">
            {/* Image Section */}
            <div className="client-image-wrapper-vertical">
              <img
                src="/clientthree.png"
                alt="AI Marketing Analysis"
                className="client-image-vertical"
              />
            </div>

            {/* Text Section */}
            <div className="client-text-wrapper-vertical">
              <h2 className="client-feature-title">Complete Brand Kit</h2>
              <p className="client-feature-description">
                Comprehensive brand documentation with AI-generated guidelines.
                Your brand Bible delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
