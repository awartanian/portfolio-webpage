import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import logo from "./aw-icon.png";

const Navbar = ({ navbar }) => {
  return (
    <div className="navbar" id={navbar ? "show-navbar" : "hide-navbar"}>
      <Link to="/">
      <img src={logo} alt="logo" />
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
    </div>
  );
};

export default Navbar;
