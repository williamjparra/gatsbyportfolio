import React from 'react'
import { graphql } from "gatsby";
import { BlogPostBodyContainer } from '../../styles/component'
import ReactMarkdown from 'react-markdown';

//import of the components for the layout
import Anchor from '../../components/AnchorTagBlog';
import Image from '../../components/Image'

export default function BlogPostContainer({ data }) {

    console.log(data)

  const { sanityMarkDownPost: post } = data

  return (
    <BlogPostBodyContainer>
            <header>
                <h1>{post.title}</h1>
                <small>{post.publishedAt}</small>
                <Image 
                    src={post.mainImage.asset.url}
                    alt={post.imageAlt} 
                />
            </header>
            <ReactMarkdown
                components={{
                    a: ({node, children}) => <Anchor node={node} children={children} />,
                    img: ({src, alt}) =>  <Image src={src} alt={alt} />
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