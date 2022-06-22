/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path')

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions  }) => {
    const {data} = await graphql(`
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

        console.log(actions)

    data.allSanityMarkDownPost.nodes.forEach(node => {
        actions.createPage({
            path: `/posts/${node.slug.current}`,
            component: path.resolve('./src/containers/Blogpost/index.js'),
            context: { slug: node.slug.current }
        })
    })
}