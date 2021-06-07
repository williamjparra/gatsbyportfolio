/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react");
const Layout = require("./src/components/layout").default
const { BlogProvider } = require('./src/Context')

exports.wrapRootElement= ({element}) => (
    <BlogProvider>
        <Layout>
            { element }
        </Layout>
    </BlogProvider>
)