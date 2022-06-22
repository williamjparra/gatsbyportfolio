/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path')

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions,  }) => {
    const data = await graphql(`
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

    data.allSanityMarkDownPost.nodes.forEach(node => {
        actions.createPages({
            path: `/posts/${node.slug.current}`,
            Component: path.resolve('./src/containers/Blogpost/index.js'),
            context: { slug: node.slug.current }
        })
    })
}