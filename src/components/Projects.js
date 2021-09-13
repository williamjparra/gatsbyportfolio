import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProjectCard from "./ProjectCard";

import './css/Projects.css'

const Projects = () => {
    const data = useStaticQuery(graphql`
        query Project {
            allSanityProjects {
                nodes {
                    title
                    githubLink
                    description
                    mainImage {
                        ...ImageWithPreview
                    }
                    id
                }
            }
        }
    `);

    return(
        <section className="Projects-Container" id="projects">
            <h3>este es el project Container</h3>
            <div className="card-container">
                { data.allSanityProjects.nodes.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
        </section>
    )
}

export default Projects