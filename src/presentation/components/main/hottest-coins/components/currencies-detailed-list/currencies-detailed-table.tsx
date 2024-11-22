import React, { useContext, useEffect, useState } from 'react'
import * as styles from './currencies-detailed-styles.scss'
import { ICurrency } from '@/domain/protocols/currency'
import FavoriteButton from '../favorite-button/favorite-button'
import { CurrencyDataContext } from '@/main/context/currency-data-context'
import CurrencyIcon from '@/presentation/elements/icons/currency-icon'
import { CURRENCIES_COLORS } from '@/presentation/protocols/currency/currency-colors'

export default function CurrenciesDetailedTable (props: {
  data: ICurrency[]
}): JSX.Element {
  const { CurrencyData, setCurrencyData } = useContext(CurrencyDataContext)
  const [state, setState] = useState(false)

  function favoriteButtonClick (e: any, target: string): void {
    setState(!state)
    setCurrencyData((oldValue: any) => {
      const result = oldValue
      const currencyIndex = oldValue.find((currency: ICurrency) => {
        return currency.code === target
      })
      result[result.indexOf(currencyIndex)].favorite = result[result.indexOf(currencyIndex)].favorite ? 0 : 1
      localStorage.setItem(`${target}-favorite`, String(result[result.indexOf(currencyIndex)].favorite))
      return result
    })
  }

  function getAllFavorites (): void {
    setState(!state)
    for (const foundCurrency of props.data) {
      const favorite = localStorage.getItem(`${foundCurrency.code}-favorite`)
      console.log({ [foundCurrency.code]: favorite })
      setCurrencyData((oldValue: any) => {
        const result = oldValue
        const currencyIndex = oldValue.find((currency: ICurrency) => {
          return currency.code === foundCurrency.code
        })
        result[result.indexOf(currencyIndex)].favorite = Number(favorite)
        return result
      })
    }
  }

  useEffect(() => {
    getAllFavorites()
  }, [props.data])
  return (
    <div className={styles.currenciesDetailedContainer}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Coin Name</th>
            <th>Price</th>
            <th>Lowest</th>
            <th>Highest</th>
            <th>Last Change</th>
            <th>Variation</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {CurrencyData.map((currency) => {
            return (
              <tr key={currency.code}>
                <td className={styles.starTableData}>
                  <FavoriteButton
                    html={{
                      onClick: (e: any) => {
                        favoriteButtonClick(e, currency.code)
                        setState(!state)
                      }
                    }}
                    active={currency.favorite}
                  />
                </td>
                <td>
                  <div className={styles.currencyHeaderTD}>
                    <CurrencyIcon img={currency.code} color={CURRENCIES_COLORS[currency.code as 'BTC' | 'ETH' | 'XRP' | 'USD']} />
                    {currency.name} - {currency.code}
                  </div>
                </td>
                <td>{currency.value}</td>
                <td>{currency.low}</td>
                <td>{currency.high}</td>
                <td
                  className={
                    styles[
                      Number(currency.pctChange) >= 0 ? 'positive' : 'negative'
                    ]
                  }
                >
                  {Number(currency.pctChange) >= 0 && '+'}
                  {currency.pctChange}%
                </td>
                <td
                  className={
                    styles[
                      Number(currency.variation.replace('R$ ', '').replace(',', '.').replace('.', '')) >= 0
                        ? 'positive'
                        : 'negative'
                    ]
                  }
                >
                  {Number(currency.variation.replace('R$ ', '').replace(',', '.').replace('.', '')) >= 0 && '+'}
                  {currency.variation}
                </td>
                <td className={styles.buttonTD}>
                  <button>Trade</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
