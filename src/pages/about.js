import React, { Component } from "react"
import Header from "../components/header"
import Layout from '../components/LayoutCSSIn'

export default class About extends Component {
  render() {
    return (
      <Layout>
        <h1>About Pandas Eating Lots</h1>
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
