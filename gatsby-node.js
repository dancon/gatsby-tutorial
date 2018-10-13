const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(
      `{
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
      `
    ).then(({ data }) => {
      data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { fields: { slug } } = node
        createPage({
          path: slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            slug
          }
        })
      })
      resolve()
    })
  })
}