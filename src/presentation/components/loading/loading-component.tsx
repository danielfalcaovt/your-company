import React from 'react'
import * as styles from './loading-styles.scss'

export default function LoadingComponent (props: {
  visible: boolean
}): JSX.Element {
  return (
    <div
      style={{ opacity: props.visible ? 1 : 0, pointerEvents: props.visible ? 'all' : 'none' }}
      className={styles.loadingContainer}
    >
      <div className={styles.loader}>
        <div className={styles.loader__bar}></div>
        <div className={styles.loader__bar}></div>
        <div className={styles.loader__bar}></div>
        <div className={styles.loader__bar}></div>
        <div className={styles.loader__bar}></div>
        <div className={styles.loader__ball}></div>
      </div>
    </div>
  )
}
