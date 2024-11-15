import React from 'react'
import * as styles from './landscape-chart-styles.scss'
import CurrencyIcon from '@/presentation/elements/icons/currency-icon'
import WarningDecreasing from '../warning/warning-decreasing'
import WarningIncreasing from '../warning/warning-increasing'
import { ICurrency } from '@/domain/protocols/currency'

export default function LandscapeChart (props: { currency: ICurrency }): JSX.Element {
  return (
    <div className={styles.landscapeChart}>
      <div className={styles.lchartHeader}>
        <CurrencyIcon img={'BTC'} color="#e7c83c" />
        <div className={styles.lchartHeaderTitle}>
          <h1>{props.currency.name}</h1>
          <p>BRL</p>
        </div>
      </div>
      <div className={styles.lchartMain}>
        <div className={styles.chart} id='landscape-chart'></div>
      </div>
      <div className={styles.lchartFooter}>
        <span>{props.currency.value}</span>
        {Number(props.currency.pctChange) < 0
          ? <WarningDecreasing value={props.currency.pctChange} />
          : <WarningIncreasing value={props.currency.pctChange} />}
      </div>
    </div>
  )
}
