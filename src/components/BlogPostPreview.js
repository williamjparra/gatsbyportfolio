import React from 'react'
import SanityImage from "gatsby-plugin-sanity-image"

const BlogPostPreview = ({blogPost}) => {
    return(<article className="blog-post-preview">
        <header>
            <h3>
                {blogPost.title}
            </h3>
        </header>
        <div className="info-container">
            <div className="image-container">
                <SanityImage 
                    {...blogPost.mainImage} 
                    width={200} 
                    alt={blogPost.imageAlt ? blogPost.imageAlt : "blogpost best developer react" } 
                />
                <small>
                    <strong>published</strong>: {blogPost._createdAt}
                </small>
            </div>
            <div className="Preview-text">
                <p>
                    {blogPost.previewText[0].children[0].text}
                </p>
            </div>
        </div>
    </article>)
}

export default BlogPostPreview