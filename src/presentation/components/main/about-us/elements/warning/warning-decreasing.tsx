import React from 'react'
import * as styles from './warning-decreasing-styles.scss'

interface WarningValues {
  value: string
}

export default function WarningDecreasing (props: WarningValues): JSX.Element {
  return (
    <div className={styles.decreasing}>
      <img src='/imgs/assets/decrease.png' alt='decreasing chart'></img>
      <span>{props.value}%</span>
    </div>
  )
}
