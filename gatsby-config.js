module.exports = {
  siteMetadata: {
    title: `Mariana Miragaia`,
    author: {
      name: `Diogo Costa`,
      summary: `A somewhat good developer`,
    },
    description: `Displaying work done by Mariana throughout the years`,
    siteUrl: `https://marianamiragaia.com/`,
  },
  plugins: [
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
        name: `Mariana Miragaia`,
        short_name: `Mariana`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `salmon`,
        display: `minimal-ui`,
        icon: `src/images/tree-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
