module.exports = {
  pathPrefix: 'gatsby-tutorial',
  siteMetadata: {
    title: `Pandas Eating Lots`
  },
  plugins: [
    'gatsby-plugin-less',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'minimal-ui',
        icon: 'src/images/pandora.png'
      }
    },
    'gatsby-plugin-offline'
  ]
}