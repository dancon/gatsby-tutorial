import React from 'react'
import styles from './index.module.less'
import { Link } from 'gatsby'

const ListLink = props => (
  <li className={styles.navLink}>
    <Link to={props.to}>{ props.children }</Link>
  </li>
)

export default ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.navBar}>
        <Link to="/" className={styles.linkHome}> 
          <h3 className={styles.link}>MySweetSite</h3>
        </Link>
        <ul className={styles.navList}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      { children }
    </div>
  )
}