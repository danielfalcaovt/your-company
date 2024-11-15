import React from 'react'
import * as styles from './nav-bar-styles.scss'

export default function NavBar (): JSX.Element {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li><a href="/">Trade <img src="/imgs/assets/down-arrow.png" /></a></li>
        <li><a href="/">Featured <img src="/imgs/assets/down-arrow.png" /></a></li>
        <li><a href="/">Market</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">Blog</a></li>
      </ul>
    </nav>
  )
}
