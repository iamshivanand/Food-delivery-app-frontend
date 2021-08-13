import React from "react";
import "./style.css";

//images

const Banner = ({ image }) => {
  return (
    <div className="displayBanner">
      <img src={image} alt="banner1" />
    </div>
  );
};

export default Banner;
