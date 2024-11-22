import React, { useContext } from 'react'
import * as styles from './currency-list-styles.scss'
import { CurrencyDataContext } from '@/main/context/currency-data-context'
import CurrencyIcon from '@/presentation/elements/icons/currency-icon'
import MenuButton from '../buttons/menu-button'
import { ICurrency } from '@/domain/protocols/currency'

export default function CurrencyList (): JSX.Element {
  const { CurrencyData } = useContext(CurrencyDataContext)
  return (
    <div className={styles.currencyListContainer}>
      <div className={styles.currencyListHeader}>
        <h1>My Portfolio</h1>
        <MenuButton />
      </div>
      <div className={styles.currencyList}>
        {CurrencyData.map((currency: ICurrency, index: any) => {
          if (index < 4) {
            return (
              <>
                {index >= 1 ? <span></span> : ''}
                <div key={currency.code} className={styles.currencyItem}>
                  <CurrencyIcon
                    html={{ className: currency.code }}
                    img={currency.code}
                  />
                  <div className={styles.currencyItemMain}>
                    <h2>{currency.name}</h2>
                    <p>{Math.random().toFixed(4)}</p>
                    <h4
                      className={
                        styles[
                          Number(currency.pctChange) > 0
                            ? 'positive'
                            : 'negative'
                        ]
                      }
                    >
                      {Number(currency.pctChange) > 0 && '+'}
                      {currency.pctChange}%
                    </h4>
                    <h3>{currency.value}</h3>
                  </div>
                </div>
              </>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}
