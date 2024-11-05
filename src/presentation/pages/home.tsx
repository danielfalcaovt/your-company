/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useContext, useEffect } from 'react'
import Main from '../components/main/main'
import { ICurrencyApi } from '@/domain/usecases/currency-api'
import { IChartGenerator } from '@/domain/usecases/chart-generator'
import {
  CurrencyDataContext
} from '@/main/context/currency-data-context'
import { IGetCurrencyHistory } from '@/domain/usecases/get-currency-history'

interface IHomePageDependencies {
  currencyApi: ICurrencyApi
  currencyHistory: IGetCurrencyHistory
  chartGenerator: IChartGenerator
}

export default function HomePage (
  dependencies: IHomePageDependencies
): JSX.Element {
  const { setCurrencyData } = useContext(CurrencyDataContext)
  useEffect(() => {
    dependencies.currencyApi
      .getCurrency('BTC-BRL,USDT-BRL,XRP-BRL,ETH-BRL')
      .then((result) => {
        setCurrencyData(result)
      })
      .catch((err) => {
        console.log(err)
      })
    dependencies.currencyHistory
      .getHistory('BTC', 15)
      .then(async (res) => {
        const data = res.map((days) => {
          return Number(days.value)
        })
        const categories = res.map((days) => {
          const date = new Date(Number(days.timestamp) * 1000).getDate()
          return date
        })
        await dependencies.chartGenerator.generateChart({
          categories,
          data,
          element: '#landscape-chart'
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      {/* <Header /> */}
      <Main />
      {/* <Footer /> */}
    </>
  )
}
