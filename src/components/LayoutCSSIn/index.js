import React from 'react'
import { css } from 'emotion'
import { Link } from 'gatsby'
import { rhythm } from '../../utils/typography'

export default ({ children }) => (
  <div className={css`
    margin: 0 auto;
    max-width: 700px;
    padding: ${rhythm(2)};
    padding-top: ${rhythm(1.5)}
  `}>
    <Link to="/">
      <h3 className={css`
        margin: 0;
        margin-bottom: ${rhythm(2)};
        display: inline-block;
        font-style: normal;
      `}>Pandas Eating Lots</h3>
    </Link>
    <Link to="/about/" className={css`
      float: right;
    `}>About</Link>
    { children }
  </div>
)