require('dotenv').config()

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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `src`,
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        watchMode: true,
        overlayDrafts: true,
        token: process.env.SANITY_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-sanity-image`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
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
        icons: [
          {
            src: `src/images/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `src/images/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/apple-icon-180x180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ] // This path is relative to the root of the site.
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
