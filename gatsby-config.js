module.exports = {
  siteMetadata: {
    title: `2019 Novel Coronavirus (2019-nCoV)`,
    description: `Dashboard tracking the spread of the the 2019 novel coronavirus (2019-nCoV)`,
    author: `colinwilson.uk`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2019-novel-coronavirus`,
        short_name: `2019-nCoV`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/2019-nCoV-icon_v1.1_opt.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
