import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { BlogPostBodyContainer } from '../../styles/component'

export default function BlogPostContainer() {
    const data = useStaticQuery(graphql`
        query projects {
            sanityMarkDownPost(slug: {current: {eq: "kmo-decir-klk"}}) {
                ArticleMarkDown
                imageAlt
                mainImage {
                    asset {
                        url
                    }
                }
                publishedAt(fromNow: true)
                slug {
                current
                }
                title
            }
        }
    `)

  return (
    <BlogPostBodyContainer>
            <div>index</div>
            <p>{JSON.stringify(data)}</p>
    </BlogPostBodyContainer>
  )
}
