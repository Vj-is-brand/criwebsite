import React from "react";
import imageSrc from "../../Images/logo.png";
import "./Header.css"

const Header = () => {
  return <>
    <div className="header">
        <img src={imageSrc} alt="Logo"/>
    </div>
  </>;
};

export default Header;
