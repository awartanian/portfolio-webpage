import React from "react";
import "./HamburgerButton.scss";

const HamburgerButton = ({setNavbar, navbar}) => {
    const showNavbar = () => setNavbar(!navbar); 

  return <i className="fas fa-bars hamburger-button" onClick={showNavbar}></i>;
};

export default HamburgerButton;
