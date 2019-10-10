module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Simple portfolio to showcase some things I've been working on through my Thinkful experience as well as my side projects! `,
    author: `Robert Osborne`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
}
