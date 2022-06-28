import React from 'react'
import { BasicContainer } from '../../styles/component'
import { graphql } from 'gatsby'
import PostComponent from '../../components/PostComponent'
import Pagination from '../../components/Pagination'

export default function Blogs(props) {
    const { pageContext, data } = props
  return (
    <BasicContainer>
        <header>
            <h1>{JSON.stringify(pageContext)}</h1>
            <p>
                TextPlace holder
            </p>
        </header>
        <section>
            {
                data.allSanityMarkDownPost.nodes.map(post => <PostComponent posts={post} key={post.id} />)
            }
        </section>
        <Pagination 
            currentPage={pageContext.currentPage} 
            totalPages={pageContext.numberOfPages} 
        />
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