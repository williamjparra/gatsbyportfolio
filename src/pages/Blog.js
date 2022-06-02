import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BlogPostPreview from '../components/BlogPostPreview'
import '../components/css/Blog.css'

const Blog = () => {

    const BlogPost = useStaticQuery(graphql`
        query PreviewBlogPost {
            allSanityMarkDownPost {
                nodes {
                    _createdAt(fromNow: true)
                    id
                    mainImage {
                        ...ImageWithPreview
                    }
                    previewText {
                        children {
                            text
                        }
                    }
                    title
                    imageAlt
                }
            }
        }
    `)

    console.log(BlogPost.allSanityMarkDownPost.nodes)

    return (<main>
        <h2>
            All BlogPost
        </h2>
        <section>
            {BlogPost.allSanityMarkDownPost.nodes.map(BlogPost => {
                return <BlogPostPreview blogPost={BlogPost} key={BlogPost.id}/> 
            })}
        </section>    
    </main>)
}

export default Blog