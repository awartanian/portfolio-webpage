import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.scss";

import picture from "../../Images/profile-picture.jpg";
import CV from "./Arty_Wartanian_CV.pdf";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile", once: "true" });
  }, []);

  return (
    <div className="about-page">
      <div className="about-container">
        <div data-aos="fade-down-left" className="about-image-container">
          <img src={picture} alt="" />
        </div>
        <h1 data-aos="fade-up-right">
          <span>Hi, I'm </span> Arty Wartanian.
        </h1>
        <h3 data-aos="fade-up-right" className="about-title">
          Frontend Web Developer
        </h3>
        <p data-aos="fade-up-right">
          After working in the aviation/travel industry for quite a long time, I
          decided to change my career.
          <br />
          In 2020 I joined a 1-year full-stack web development course and found
          a new passion in building websites. Besides staring at code for hours,
          I also enjoy movies, fitness training and italian food.
        </p>
        <div data-aos="fade-up-right" className="about-buttons">
          <a
            className="download-cv-button"
            href={CV}
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
          <Link to="/contact">
            <div className="contact-button">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
