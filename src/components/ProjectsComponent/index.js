import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { BodyContainer } from '../../styles/component'
import ProjectView from './projectDescription';
import './index.css'


export default function Projects() {
    const {allSanityProjects: data} = useStaticQuery(graphql`
        query Projects {
            allSanityProjects {
                nodes {
                    title
                    githubLink
                    description
                    id
                }
            }
        }
    `)

  return (
      <BodyContainer>
          <section className="projectsContainer">
            {
                data.nodes.map(({title, description, id, githubLink}, index) => <ProjectView 
                        title={title} 
                        description={description} 
                        link={githubLink} 
                        index={index + 1} 
                        key={id} 
                    />
                )
            }
          </section>
      </BodyContainer>
  )
}
