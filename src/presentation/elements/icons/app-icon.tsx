import React from 'react'
import * as styles from './app-icon-styles.scss'

type appIconModel = {
  imgSrc: string
  title: string
}

export default function AppIcon (props: appIconModel): JSX.Element {
  return (
    <div className={styles.appIcon}>
      <img src={props.imgSrc} alt={props.title + ' icon'}/>
      <h1>{props.title}</h1>
    </div>
  )
}
