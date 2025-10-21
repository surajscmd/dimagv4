import React from "react";
import "./sectioncss/pain.css";
const Pain = () => {
  return (
    <div className="pain-section">
      <div className="pain-header">
        <h1 className="pain-title">Feel this pain</h1>
      </div>
      <div className="pain-container">
        <div className="row-one">
          {/* Card 1 */}
          <div className="pain-card">
            <img src="/firstimg.png" alt="Ad issue" className="pain-image" />
            <div className="pain-text-wrapper">
              <p className="pain-text">
                Your Ad budget is Burning, Not Earning
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="pain-card-two">
            <img
              src="/secondimg.png"
              alt="Ad issue"
              className="pain-image-two"
            />
            <div className="pain-text-wrapper-second bg-pink">
              <p className="pain-text-second">
                You're Invisible Where It Matters Most
              </p>
            </div>
          </div>
        </div>
        <div  className="row-two">
          {/* Card 3 */}
          <div className="pain-card">
            <img src="/thirdimage.png" alt="Ad issue" className="pain-image" />
            <div className="pain-text-wrapper">
              <p className="pain-text">
                Your Website is Hurting More Than It's Helping
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="pain-card-two">
            <img
              src="/fourthimg.png"
              alt="Ad issue"
              className="pain-image-two"
            />
            <div className="pain-text-wrapper-second bg-blue">
              <p className="pain-text-second">
                Your Social Media is a Ghost Town
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pain;
