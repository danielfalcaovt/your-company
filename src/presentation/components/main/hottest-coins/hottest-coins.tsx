import React, { useContext } from 'react'
import * as styles from './hottest-styles.scss'
import CurrenciesDetailedTable from './components/currencies-detailed-list/currencies-detailed-table'
import { CurrencyDataContext } from '@/main/context/currency-data-context'

export default function HottestCoins (): JSX.Element {
  const { CurrencyData } = useContext(CurrencyDataContext)

  return <section className={styles.hottestContainer}>
    <div className={styles.hottestHeader}>
      <h1>Exploring Hottest Coin Trends</h1>
    </div>
    <CurrenciesDetailedTable data={CurrencyData} />
  </section>
}
