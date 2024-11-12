import React from 'react'
import * as styles from './warning-increasing-styles.scss'

interface WarningValues {
  value: string
}

export default function WarningIncreasing (props: WarningValues): JSX.Element {
  return (
    <div className={styles.increasing}>
      <img src='/imgs/assets/increase.png' alt='increasing chart'></img>
      <span>+{props.value}%</span>
    </div>
  )
}
