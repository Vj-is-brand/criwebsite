import React from "react";
import { FaFacebook, FaGlobe, FaPhone } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="ml">
          <FaPhone className="icon" size={30} />
          Toll free 1800 200 1234
        </p>
        <p className="ml">
          <FaFacebook className="icon" size={30} />
          www.facebook.com/cripumps
        </p>
        <p className="ml">
          <FaGlobe className="icon" size={30} />
          www.crigroups.com
        </p>
      </div>
    </>
  );
};

export default Footer;
