import React from 'react'
import { navigate } from 'gatsby'
import './index.css'


export default function ProjectView({title, description, link, index}) {

  console.log(link)

  return (
    <a href={link} target="_Blank" no-reffer className="projects-anchor">
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
