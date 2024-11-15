import React from 'react'
import * as styles from './confirm-button-styles.scss'

export default function ConfirmButton (props: { text: string }): JSX.Element {
  return <button className={styles.confirmButton}>{props.text}</button>
}
