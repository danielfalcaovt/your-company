import React from 'react'
import * as styles from './increase-button-styles.scss'

export default function IncreaseButton (): JSX.Element {
  return (
    <button className={styles.increaseButton}>
      <img src="/imgs/assets/increase-arrow.png" alt="increasing button img" />
    </button>
  )
}
