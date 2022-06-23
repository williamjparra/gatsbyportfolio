import React from 'react'
import { graphql } from "gatsby";
import { BlogPostBodyContainer } from '../../styles/component'
import ReactMarkdown from 'react-markdown';

//import of the components for the layout
import Anchor from '../../components/AnchorTagBlog';

export default function BlogPostContainer({ data }) {

  const { sanityMarkDownPost: post } = data 

  return (
    <BlogPostBodyContainer>
            <h1>This is the beginning of everything</h1>
            <ReactMarkdown
                components={{
                    a: ({node, children}) => <Anchor node={node} children={children} />,
                }}
                children={post.ArticleMarkDown}
            />
    </BlogPostBodyContainer>
  )
}

export const query = graphql`
    query projects($slug: String) {
        sanityMarkDownPost(slug: {current: {eq: $slug}}) {
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
`