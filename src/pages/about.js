import React, { Component } from "react"
import Header from "../components/header"
import Layout from '../components/Layout'

export default class About extends Component {
  render() {
    return (
      <Layout>
        <Header content="About me!" />
        <Header content="It's pretty code~" />
        <p>Such wow, Very React.</p>
        <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
      </Layout>
    )
  }
}
