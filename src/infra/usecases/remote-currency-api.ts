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
        finalResult[pos].value = `R$ ${Number(
          result.body[pos].high
        ).toLocaleString()}`
        finalResult[pos].name = result.body[pos].name
        currenciesArray.push(finalResult[pos])
        delete finalResult[pos].high
      }
      return new Promise((resolve) => resolve(currenciesArray))
    } else {
      return Promise.resolve(null)
    }
  }

  async getHistory (code: string, days: number): Promise<ICurrency[]> {
    const result = await this.httpClient.get({
      url: `${env.currencyHistory}/${code}/${days}`
    })
    if (result.statusCode === 200) {
      const finalResult: any = []
      // insert currency data from 0 index of result in the 0 index of finalResult
      // invert the currency values received from result.body
      for (let pos = result.body.length - 1; pos >= 0; pos--) {
        const newValue = result.body[pos]
        newValue.value = Number(result.body[pos].high)
        newValue.name = result.body[0].name
        delete newValue.high
        finalResult.push(newValue)
      }
      return finalResult
    }
    return null
  }
}
