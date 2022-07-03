import React from 'react'
import { BasicContainer } from '../../styles/component'
import { graphql } from 'gatsby'
import PostComponent from '../../components/PostComponent'
import Pagination from '../../components/Pagination'
import { AllBlogPostContainer, AllPostHeader } from '../../styles/component'

export default function Blogs(props) {
  const { pageContext, data } = props
  
  return (
    <BasicContainer>
        <AllPostHeader>
            <h1>Blog Posts</h1>
            {
                pageContext.currentPage < 2 && <p>
                    Welcome to my blog. Here, I'll be sharing my experiences as a web developer and JavaScript programmer. I'll also be discussing the experiments I conduct on these technologies, as well as my journey as a web developer. I hope you enjoy reading my posts and that you learn something from them. If you have any questions or comments, feel free to contact me.
                </p>
            }
        </AllPostHeader>
        <AllBlogPostContainer>
            {
                data.allSanityMarkDownPost.nodes.map(post => <PostComponent posts={post} key={post.id} />)
            }
        </AllBlogPostContainer>
        {
            pageContext.numberOfPages > 1 && <Pagination 
                currentPage={pageContext.currentPage} 
                totalPages={pageContext.numberOfPages} 
            />
        }
    </BasicContainer>
  )
}

export const query = graphql`
    query posts($limit: Int, $skip: Int) {
        allSanityMarkDownPost(limit: $limit, skip: $skip) {
            nodes {
                id
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