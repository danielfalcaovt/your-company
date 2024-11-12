/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useContext, useEffect, useState } from 'react'
import Main from '../components/main/main'
import { ICurrencyApi } from '@/domain/usecases/currency-api'
import { IChartGenerator } from '@/domain/usecases/chart-generator'
import { CurrencyDataContext } from '@/main/context/currency-data-context'
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
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    const promise1 = dependencies.currencyApi
      .getCurrency('BTC-BRL,USDT-BRL,XRP-BRL,ETH-BRL')
      .then((result) => {
        setCurrencyData(result)
      })
      .catch((err) => {
        console.log(err)
      })
    const promise2 = dependencies.currencyHistory
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
    const promise3 = dependencies.currencyHistory
      .getHistory('USD', 15)
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
          element: '#portrait-chart'
        })
      })
      .catch((err) => {
        console.log(err)
      })

    Promise.all([promise1, promise2, promise3])
      .then(() => {
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      {isLoading && <h1>Loading....</h1>}
      <>
        {/* <Header /> */}
        <Main />
        {/* <Footer /> */}
      </>
    </>
  )
}
