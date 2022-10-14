/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react");
const Layout = require("./src/containers/layout/index").default
const { BlogProvider } = require('./src/Context')

exports.wrapRootElement= ({element}) => (
    <BlogProvider>
        <Layout>
            { element }
        </Layout>
    </BlogProvider>
)