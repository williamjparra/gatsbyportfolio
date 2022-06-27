import React from 'react'
import { BasicContainer } from '../../styles/component'
import { graphql } from 'gatsby'

export default function Blogs(props) {
    const { pageContext, data } = props
  return (
    <BasicContainer>
        <h3>{JSON.stringify(pageContext)}</h3>
        <h3>{JSON.stringify(pageContext)}</h3>
        <h3>{JSON.stringify(pageContext)}</h3>
        <h3>{JSON.stringify(pageContext)}</h3>
        <h3>{JSON.stringify(pageContext)}</h3>
        <p>{JSON.stringify(data)}</p>
    </BasicContainer>
  )
}

export const query = graphql`
    query posts($limit: Int, $skip: Int) {
        allSanityMarkDownPost(limit: $limit, skip: $skip) {
            nodes {
                title
                publishedAt(fromNow: true)
                previewText {
                    children {
                        text
                    }
                }
                mainImage {
                    asset {
                        url
                    }
                }
                imageAlt
                slug {
                    current
                }
            }
        }
    }
`