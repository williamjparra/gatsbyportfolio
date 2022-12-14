import React from 'react'
import './index.css'


export default function ProjectView({title, description, link, index}) {
  return (
    <a href={link} target="_Blank" rel='noreferrer' className="projects-anchor">
      <article className="projects-items-container" >
          <div className="index-container">
            <span>
                0{index}
            </span>
          </div>
          <div className="title-container">
            <h3>
                {title}
            </h3>
          </div>
          <div className="description-container">
            <p>
                {description}
            </p>
          </div>
      </article>
    </a>
  )
}
