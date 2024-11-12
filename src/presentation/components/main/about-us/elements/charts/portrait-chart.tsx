import React from 'react'
import * as styles from './portrait-chart-styles.scss'
import CurrencyIcon from '@/presentation/elements/icons/currency-icon'
import WarningIncreasing from '../warning/warning-increasing'
import WarningDecreasing from '../warning/warning-decreasing'
import { ICurrency } from '@/domain/protocols/currency'
import IncreaseButton from '../buttons/increase-button'

export default function PortraitChart (props: {
  currency: ICurrency
}): JSX.Element {
  return (
    <div className={styles.portraitChartContainer}>
      <div className={styles.portraitChartHeader}>
        <div>
          <CurrencyIcon color="#62A290" img="USD" />
          <div className={styles.portraitChartHeaderText}>
            <h1>{props.currency?.name}</h1>
            <h2>{props.currency?.code}</h2>
          </div>
        </div>
        <div>
          <IncreaseButton/>
        </div>
      </div>
      <div className={styles.portraitChartMain}>
        <h1>{props.currency?.value}</h1>
        {Number(props.currency?.value) > 0
          ? <WarningIncreasing value={props.currency?.pctChange} />
          : (
          <WarningDecreasing value={props.currency?.pctChange} />
            )}
      </div>
      <div id="portrait-chart" className={styles.portraitChart}></div>
    </div>
  )
}
