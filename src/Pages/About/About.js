import React, {useEffect} from "react";
import "./About.scss";
import picture from "./profile-picture.jpg";
import spinner from "./dotted-spinner.png"; 
import Aos from "aos"; 
import "aos/dist/aos.css"; 
import { Link } from 'react-router-dom';
import CV from "./CV_Arty_Wartanian.pdf";

const About = () => {

useEffect(() => {
  Aos.init({duration: 1500, disable: 'mobile', once: "true"});
}, [])

  return (
    <div  className="about-page">
      <div className="about-container">
        <div data-aos="fade-down-left" className="about-image-container">
          <img src={picture} alt="" />
          <div className="spinner" style={{ backgroundImage: `url(${spinner})` }}></div>
          </div>
        <h1 data-aos="fade-up-right" ><span>Hi, I'm </span> Arty Wartanian.</h1>
        <h3 data-aos="fade-up-right" className="about-title">Full-Stack Web Developer</h3>
        <p data-aos="fade-up-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, rerum
          enim facere laudantium eaque consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div data-aos="fade-up-right" className="about-buttons">
          <a className="download-cv-button" href={CV} target="_blank" rel="noreferrer">Download CV</a>
          <Link to={`/contact`}  >
          <a className="contact-button" href="https://www.linkedin.com/in/arty-wartanian/" target="_blank" rel="noreferrer">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
