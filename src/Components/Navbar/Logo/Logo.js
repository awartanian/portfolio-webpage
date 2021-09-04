import React from "react";

/// IMPORTING NAVBAR LOGO
import orangeLogo from "../../../Images/Navbar-logo/aw-icon-orange.png";
import blueLogo from "../../../Images/Navbar-logo/aw-icon-blue.png";
import yellowLogo from "../../../Images/Navbar-logo/aw-icon-yellow.png";

const Logo = ({ themeColor }) => {
  return (
    <div className="logo-container">
      <img
        src={orangeLogo}
        className={themeColor === "orange" ? "orangeLogo" : null}
        alt="logo"
      />
      <img
        src={blueLogo}
        className={themeColor === "blue" ? "blueLogo" : null}
        alt="logo"
      />
      <img
        src={yellowLogo}
        className={themeColor === "yellow" ? "yellowLogo" : null}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
