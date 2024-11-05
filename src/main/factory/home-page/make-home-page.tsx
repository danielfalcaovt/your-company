import React from 'react'
import { CurrencyApi } from '@/data/usecases/currency-api'
import { AxiosHttpClient } from '@/infra/usecases/axios-http-client/axios-http-client'
import { RemoteCurrencyApi } from '@/infra/usecases/remote-currency-api'
import HomePage from '@/presentation/pages/home'
import { ChartGenerator } from '@/data/usecases/chart-generator'
import { ApexChartsAdapter } from '@/infra/usecases/apex-charts-adapter'
import { GetCurrencyHistory } from '@/data/usecases/get-currency-history'

export default function makeHomePage (): JSX.Element {
  const httpClient = new AxiosHttpClient()
  const remoteCurrencyApi = new RemoteCurrencyApi(httpClient)
  const currencyApi = new CurrencyApi(remoteCurrencyApi)
  const currencyHistory = new GetCurrencyHistory(remoteCurrencyApi)
  const chartGenerator = new ChartGenerator(new ApexChartsAdapter())
  return <HomePage chartGenerator={chartGenerator} currencyHistory={currencyHistory} currencyApi={currencyApi}/>
}
