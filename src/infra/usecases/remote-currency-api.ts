/* eslint-disable @typescript-eslint/return-await */
import { IHttpClient } from '../protocols/http-client'
import { IRemoteCurrencyApi } from '@/data/protocols/iremote-currency-api'
import { ICurrency } from '@/domain/protocols/currency'

export class RemoteCurrencyApi implements IRemoteCurrencyApi {
  constructor (private readonly httpClient: IHttpClient) {}
  async getCurrency (currency: string): Promise<ICurrency | null> {
    const result = await this.httpClient.get({
      url: `https://economia.awesomeapi.com.br/last/${currency}`
    })
    console.log(result)
    if (result.statusCode === 200) {
      const currencyProperty = Object.keys(result.body)
      console.log(currencyProperty)
      const { code, pctChange, high } = result.body[currencyProperty[0]]
      return new Promise((resolve) => resolve({ code, pctChange, value: `R$${Number(high).toLocaleString()}` }))
    } else {
      return Promise.resolve(null)
    }
  }
}
