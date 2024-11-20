/* eslint-disable n/no-path-concat */
import React from 'react'
import * as styles from './sponsors-styles.scss'
import { sponsorsData } from './sponsors-data'

export default function Sponsors (): JSX.Element {
  return (
    <section className={styles.sponsorsContainer}>
      {sponsorsData.map((sponsor) => {
        return (
          <div className={styles.sponsor}>
            <img src={`/imgs/sponsors/${sponsor}.png`} alt={`${sponsor}`}/>
          </div>
        )
      })}
    </section>
  )
}
