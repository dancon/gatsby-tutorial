import React, { Component } from "react"
import Header from "../components/header"

export default class About extends Component {
  render() {
    return (
      <div style={{ Color: "teal" }}>
        <Header content="About me!" />
        <Header content="It's pretty code~" />
        <p>Such wow, Very React.</p>
      </div>
    )
  }
}
