import React from "react";
import SanityImage from "gatsby-plugin-sanity-image"

const ProjectCard = ({project}) => {
    console.log(project)

    return (
        <div className="card">
            <div className="title-container">
                <h3>{project.title}</h3>
            </div>
            <div className="card-image">
                <SanityImage {...project.mainImage} width={500} alt="hola"/>
            </div>
            <p>
                {project.description}
            </p>
            <a href={project.githubLink} target="_Blank" rel="noreferrer">see te code on github</a>
        </div>
    )
}

export default ProjectCard