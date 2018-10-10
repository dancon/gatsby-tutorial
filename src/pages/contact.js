import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Header content="Contact" />
    <p>Sent us a message.</p>
  </div>
)
