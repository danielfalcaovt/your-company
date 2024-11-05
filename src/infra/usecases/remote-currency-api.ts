/* eslint-disable @typescript-eslint/no-for-in-array */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/return-await */
import { IHttpClient } from '../protocols/http-client'
import { IRemoteCurrencyApi } from '@/data/protocols/iremote-currency-api'
import { ICurrency } from '@/domain/protocols/currency'
import { IGetCurrencyHistory } from '@/domain/usecases/get-currency-history'
import env from '@/main/config/env'

export class RemoteCurrencyApi implements IRemoteCurrencyApi, IGetCurrencyHistory {
  constructor (private readonly httpClient: IHttpClient) {}
  async getCurrency (currencies: string): Promise<ICurrency[] | null> {
    const result = await this.httpClient.get({
      url: `${env.currencyApi}/${currencies}`
    })
    if (result.statusCode === 200) {
      const currencyProperties = Object.keys(result.body)
      const currenciesArray: ICurrency[] = []
      const finalResult = result.body
      for (const pos of currencyProperties) {
        finalResult[pos].value = `R$ ${Number(result.body[pos].high).toLocaleString()}`
        finalResult[pos].name = result.body[pos].name
        currenciesArray.push(finalResult[pos])
        delete finalResult[pos].high
      }
      console.log(finalResult)
      return new Promise((resolve) => resolve(currenciesArray))
    } else {
      return Promise.resolve(null)
    }
  }

  async getHistory (code: string, days: number): Promise<ICurrency[]> {
    const result = await this.httpClient.get({ url: `${env.currencyHistory}/${code}/${days}` })
    if (result.statusCode === 200) {
      const finalResult = result.body
      for (const pos in result.body) {
        finalResult[pos].value = Number(result.body[pos].high)
        finalResult[pos].name = result.body[0].name
        delete finalResult[pos].high
      }
      return finalResult
    }
    return null
  }
}
