import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Aos from "aos";
import "./About.scss";
import "aos/dist/aos.css";

import picture from "./profile-picture.png";
import spinner from "./dotted-spinner.png";
import CV from "./Arty_Wartanian_CV.pdf";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile", once: "true" });
  }, [])

  return (
    <div className="about-page">
      <div className="about-container">
        <div data-aos="fade-down-left" className="about-image-container">
          <img src={picture} alt="" />
          <div className="spinner" style={{ backgroundImage: `url(${spinner})` }}></div>
        </div>
        <h1 data-aos="fade-up-right" ><span>Hi, I'm </span> Arty Wartanian.</h1>
        <h3 data-aos="fade-up-right" className="about-title">Full-Stack Web Developer</h3>
        <p data-aos="fade-up-right">My newly found passion in coding motivated me to change my career in aviation. So I decided to join a 1-year full stack web dev course and I'm now loving every minute of it. Besides staring at code for hours, I also enjoy movies, fitness training and italian food.</p>
        <div data-aos="fade-up-right" className="about-buttons">
          <a className="download-cv-button" href={CV} target="_blank" rel="noreferrer">Download CV</a>
          <Link to="/contact"><div className="contact-button">Contact</div></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
