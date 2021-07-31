import React from 'react';
import ProjectData from './ProjectData';
import "./ProjectCard.scss";

const ProjectCard = () => {

    const renderProjects = ProjectData.map((project, id) => {
        const { title, languages, info, demo, code,image} = project;

        return (
            <div className="projects-col" key={id}>
                <div className="project-card" >
                    <img src={image} alt="" className="project-card-image" />
                    <div className="project-card-overlay">
                        <div className="project-card-text-container">
                            <h3>{title}</h3>
                            <h4>{languages}</h4>
                            <p>{info}</p>
                            <div className="project-card-links">
                                <a className="demo-link" href={demo} target="_blank" rel="noreferrer">DEMO</a>
                                <a className="code-link" href={code} target="_blank" rel="noreferrer">CODE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {renderProjects}
        </>
    )
}

export default ProjectCard;
