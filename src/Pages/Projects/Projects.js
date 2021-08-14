import React, {useEffect} from "react";
import "./Projects.scss";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Aos from "aos";
import "aos/dist/aos.css";


const Projects = () => {

  useEffect(() => {
    Aos.init({duration: 1000, disable: "mobile", once:"true"});
  }, [])

  return (
    <div className="projects-page">
        <h2 data-aos="fade-down" className="projects-title">Projects</h2>
        <div className="projects-underline"></div>
        <div data-aos="fade" className="projects-row">
          <ProjectCard />
        </div>
    </div>
  );
};

export default Projects;
