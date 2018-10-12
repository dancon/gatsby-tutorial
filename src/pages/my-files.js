import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/LayoutCSSIn'

export default ({ data }) => {
  return (
    <Layout>
      <h1>My Site's Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {
            data.allFile.edges.map(({ node }, index) => {
              const { relativePath, prettySize, extension, birthTime } = node

              return (
                <tr>
                  <td>{ relativePath }</td>
                  <td>{ prettySize }</td>
                  <td>{ extension }</td>
                  <td>{ birthTime }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath,
          prettySize,
          extension,
          birthTime(fromNow: true)
        }
      }
    }
  }
`