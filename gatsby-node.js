/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path')

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query posts {
                allSanityMarkDownPost {
                nodes {
                    slug {
                    current
                    }
                }
            }
        }
    `)
    
    const PagesArray = [] 
    const posts = data.allSanityMarkDownPost.nodes
    const maxPaginationNumber = 10;
    const numberOfPages = Math.ceil( posts.length / maxPaginationNumber)
    
    for(let i = 0; i < numberOfPages; i++) {
        PagesArray.push(PagesArray.length + 1)
    }

    PagesArray.forEach((node, i) => {
        actions.createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve('./src/containers/Posts/index.js'),
            context: {
                limit: maxPaginationNumber,
                skip: maxPaginationNumber * i,
                numberOfPages,
                currentPage: i + 1,
            }
        })
    })

    posts.forEach(node => {
        actions.createPage({
            path: `/posts/${node.slug.current}`,
            component: path.resolve('./src/containers/Blogpost/index.js'),
            context: { slug: node.slug.current }
        })
    })
}