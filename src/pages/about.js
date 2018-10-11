import React, { Component } from "react"
import Header from "../components/header"
import Layout from '../components/LayoutCSSIn'
import { graphql } from 'gatsby'

export default class About extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <h1>About { data.site.siteMetadata.title }</h1>
        <p>
          We're the only site running on your computer dedicated to showing the best
          photos and videos of pandas eating lots of food.
        </p>
        <Header content="About me!" />
        <Header content="It's pretty code~" />
        <p>Such wow, Very React.</p>
        <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
