import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import "./Navbar.scss";

/// IMPORTING REACT ICONS
import { FiSun } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";

const Navbar = ({ navbar, themeColor, setThemeColor, darkMode, setDarkMode, }) => {

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
      <Link to="/portfolio-webpage">
        <Logo themeColor={themeColor} />
      </Link>

      <ul className="navLinks-container">
        <li>
          <NavLink exact={true} to="/portfolio-webpage" className="navLink" activeClassName="active-navLink">
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
            <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
            <div >
              <span className="dark"><BiMoon /></span>
              <span className="light"><FiSun /></span>
            </div>
            <i className="round-switch"></i>
          </label>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
