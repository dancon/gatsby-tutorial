import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from 'react-emotion'
import Layout from '../components/LayoutCSSIn'
import { rhythm } from '../utils/typography'

export default ({ data }) => {
  const { allMarkdownRemark: { totalCount, edges } } = data
  return (
    <Layout>
      <h1 className={css`
        display: inline-block;
        border-bottom: 1px solid;
      `}>Amazing Pandas Eating Things</h1>
      <h4>{ totalCount } Posts</h4>
      {
        edges.map(({ node }) => {
          return (
            <div key={node.id} className={css`
              margin-bottom: ${rhythm(1/2)};
            `}>
              <Link to={node.fields.slug} className={css`
                text-decoration: none;
                color: inherit;
              `}>
                <h3 className={css`
                  margin-bottom: ${rhythm(1/4)};
                `}>
                  { node.frontmatter.title } -- 
                  <span className={css`
                    color: #bbb;
                  `}>
                    {' '}{ node.frontmatter.date }
                  </span>
                </h3>
                <p>{ node.excerpt }</p>
              </Link>
            </div>
          )
        })
      }
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
      <Link to='/about-css-modules'>CSS Modules</Link>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <h1>Richard Hamming on Luck</h1>
      <div>
        <p>
          From Richard Hamming’s classic and must-read talk, “
          <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            You and Your Research
          </a>
          ”.
        </p>
        <blockquote>
          <p>
            There is indeed an element of luck, and no, there isn’t. The prepared
            mind sooner or later finds something important and does it. So yes, it
            is luck.{" "}
            <em>
              The particular thing you do is luck, but that you do something is
              not.
            </em>
          </p>
        </blockquote>
      </div>
      <p>Posted April 09, 2011</p>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order:  DESC}) {
      totalCount,
      edges {
        node {
          id,
          frontmatter {
            title,
            date
          },
          excerpt,
          html,
          fields {
            slug
          }
        }
      }
    }
  }
`