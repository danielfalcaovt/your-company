import React, { useContext } from 'react'
import * as styles from './landscape-chart-styles.scss'
import CurrencyIcon from '@/presentation/elements/icons/currency-icon'
import WarningDecreasing from '../warning/warning-decreasing'
import { CurrencyDataContext } from '@/main/context/currency-data-context'
import WarningIncreasing from '../warning/warning-increasing'

export default function LandscapeChart (): JSX.Element {
  const { CurrencyData } = useContext(CurrencyDataContext)
  return (
    <div className={styles.landscapeChart}>
      <div className={styles.lchartHeader}>
        <CurrencyIcon img={'BTC'} color="#e7c83c" />
        <div className={styles.lchartHeaderTitle}>
          <h1>{CurrencyData[0].code}</h1>
          <p>BRL</p>
        </div>
      </div>
      <div className={styles.lchartMain}>
        <div className={styles.chart} id='landscape-chart'></div>
      </div>
      <div className={styles.lchartFooter}>
        <span>{CurrencyData[0].value}</span>
        {Number(CurrencyData[0].pctChange) < 0
          ? <WarningDecreasing value={`${CurrencyData[0].pctChange}%`} />
          : <WarningIncreasing value={`+${CurrencyData[0].pctChange}%`} />}
      </div>
    </div>
  )
}
