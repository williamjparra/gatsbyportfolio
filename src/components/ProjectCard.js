import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {getFluidGatsbyImage} from 'gatsby-source-sanity'

const ProjectCard = ({project}) => {
    console.log(project.mainImage.asset)

    return (
        <div className="card">
            <div className="card-image">
                <img src={project.mainImage.asset.url} />
            </div>
        </div>
    )
}

export default ProjectCard