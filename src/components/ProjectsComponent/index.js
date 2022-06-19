import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { BodyContainer } from '../../styles/component'
import './index.css'


export default function Projects() {
    const {allSanityProjects: data} = useStaticQuery(graphql`
        query Projects {
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
    `)

  return (
      <BodyContainer>
          <section className="projectsContainer">

          </section>
      </BodyContainer>
  )
}
