module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`
  },
  plugins: [
    'gatsby-plugin-less',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    }
  ]
}