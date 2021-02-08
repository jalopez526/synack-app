import React from "react";

const Logo = ({ source }) => {
  return (
    <div className="image-container">
      <img src={source} alt="Logo" className="image-width" />
    </div>
  );
};

export default Logo;
