import React, {useEffect} from "react";
import "./Projects.scss";
import Aos from "aos"; 
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Projects = () => {


  useEffect(() => {
    Aos.init({duration: 1000, disable: 'mobile', once: "true"});
  }, [])

  return (
    <div  className="projects-page">
        <h1  data-aos="fade-down" className="projects-title">Projects</h1>
        <div className="projects-underline"></div>
        <div data-aos="fade" className="projects-row">
          <ProjectCard />
        </div>
    </div>
  );
};

export default Projects;
