import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import { FiSun } from 'react-icons/fi';
import { BiMoon } from 'react-icons/bi';
import orangeLogo from "../../Images/Navbar-logo/aw-icon-orange.png";
import blueLogo from "../../Images/Navbar-logo/aw-icon-blue.png";
import yellowLogo from "../../Images/Navbar-logo/aw-icon-yellow.png";


const Navbar = ({ navbar, themeColor, setThemeColor, darkMode, setDarkMode }) => {

  const [colorButtons, setColorButtons] = useState(false);
  
  useEffect(() => {
    const root = document.documentElement;
    if (themeColor === "orange") { root?.style.setProperty("--primary-color", "#fd4133f3") }
    if (themeColor === "blue") { root?.style.setProperty("--primary-color", "#5149F0f3") }
    if (themeColor === "yellow") { root?.style.setProperty("--primary-color", "#ff9d00f3") }
  }, [themeColor]);


  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--background-color", darkMode ? "#292929" : "#e4e4e4");
    root?.style.setProperty("--font-color", darkMode ? "#FAFAFA" : "#333");
    root?.style.setProperty("--text-input-color", darkMode ? "#292929" : "white");
  }, [darkMode]);

  return (
    <div className="navbar" id={navbar ? "show-navbar" : "hide-navbar"}>
      <Link to="/">
        <div className="logo-container">
          <img src={orangeLogo} className={themeColor === "orange" ? "orangeLogo" : null} alt="logo" />
          <img src={blueLogo} className={themeColor === "blue" ? "blueLogo" : null} alt="logo" />
          <img src={yellowLogo} className={themeColor === "yellow" ? "yellowLogo" : null} alt="logo" />
        </div>
      </Link>
      <ul className="navLinks-container">
        <li>
          <NavLink exact={true} to="/" className="navLink" activeClassName="active-navLink">
            <i className="far fa-user-circle navLink-icon"></i>
            <div className="navLink-page">About</div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" className="navLink" activeClassName="active-navLink">
            <i className="fas fa-th navLink-icon"></i>
            <div className="navLink-page">Projects</div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="navLink" activeClassName="active-navLink">
            <i className="far fa-envelope navLink-icon"></i>
            <div className="navLink-page">Contact</div>
          </NavLink>
        </li>
      </ul>

      <div className="navbar-bottom-container">
        <div className="theme-color-wrapper">
          <div className="theme-color-menu" id={colorButtons ? "showColorButtons" : null} onClick={() => setColorButtons(!colorButtons)}>
            <div className="theme-color-button" onClick={() => setThemeColor("orange")}><div className="orange-circle circle"></div></div>
            <div className="theme-color-button" onClick={() => setThemeColor("blue")}><div className="blue-circle circle"></div></div>
            <div className="theme-color-button" onClick={() => setThemeColor("yellow")}><div className="yellow-circle circle"></div></div>
          </div>
        </div>
        <div className="dark-light-mode" >
          <label className="switch-container" >
            <input type="checkbox" onClick={()=>setDarkMode(!darkMode)}/>
            <div >
              <span className="dark"><BiMoon/></span>
              <span className="light"><FiSun/></span>
            </div>
            <i className="round-switch"></i>
          </label>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
