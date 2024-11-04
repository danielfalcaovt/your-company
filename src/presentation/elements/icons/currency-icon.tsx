/* eslint-disable no-useless-computed-key */
import React from 'react'
import * as styles from './currency-icon-styles.scss'

export default function CurrencyIcon (props: { img: string, color?: string, html?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> }): JSX.Element {
  return (
    <div className={`${styles.currencyButton} ${styles[props.html?.className]}`} style={{ ['--currencyColor']: props.color || '' } as any}>
      <img src={`/imgs/currencies/${props.img}.png`} alt={`${props.img} icon`}/>
    </div>
  )
}
