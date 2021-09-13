module.exports = {
  siteMetadata: {
    title: `WilliamDev`,
    description: `this is my portfolio build in react and gatsby, also y use sanity.io to manage my blog post, y write about expressjs, react, react-native, golang, and more `,
    author: `@williamjparra`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `h5dvndkv`,
        dataset: `production`,
        watchMode: true,
        overlayDrafts: true,
        token: 'sk7OeK0mpSwN3OVBL0EskwfbRQugJX277c53T7Cm8dWbPpGvjAjrHx6aofFNlsvRz6m5Zw9XkEe24ivXLPeaeErHfDL7Vq6sDrKLogQYlgfvJH9qRGP2oNXRXwoljjFUf1OXkQ30VLmMIGLgofJdzWIAVsipApU5WhRhzgSzqWNu7kFP60Oj'
      }
    },
    {
      resolve: `gatsby-plugin-sanity-image`,
      options: {
        projectId: `h5dvndkv`,
        dataset: `production`,
        defaultImageConfig: {
          quality: 70,
          fit: `max`,
          auto: `format`
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-css-customs`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WilliamDevPortfolio`,
        short_name: `WilliamDev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bhhulogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
