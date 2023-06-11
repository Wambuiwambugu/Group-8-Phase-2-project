import React from "react";
import image3 from "../../Images/image3.gif";
import "./Landingpage.css";

const Landingpage = ({ clickHandler }) => {
  return (
    <div className="app-introduction">
      <h1>Welcome to Our Health App!</h1>
      <p>Experience the best features and benefits of setting your health goals.</p>
      <div className="key-features">
        <div className="feature">
          <img src={image3} alt="water" />
        </div>
      </div>
      <button className="cta-button" onClick={clickHandler}>
        Get Started
      </button>
    </div>
  );
};

export default Landingpage;

