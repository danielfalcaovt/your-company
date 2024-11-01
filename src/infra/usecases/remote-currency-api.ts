/* eslint-disable @typescript-eslint/no-for-in-array */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/return-await */
import { IHttpClient } from '../protocols/http-client'
import { IRemoteCurrencyApi } from '@/data/protocols/iremote-currency-api'
import { ICurrency } from '@/domain/protocols/currency'

export class RemoteCurrencyApi implements IRemoteCurrencyApi {
  constructor (private readonly httpClient: IHttpClient) {}
  async getCurrency (currencies: string): Promise<ICurrency[] | null> {
    const result = await this.httpClient.get({
      url: `https://economia.awesomeapi.com.br/last/${currencies}`
    })
    console.log(result)
    if (result.statusCode === 200) {
      const currencyProperties = Object.keys(result.body)
      const currenciesArray: ICurrency[] = []
      const finalResult = result.body
      for (const pos of currencyProperties) {
        finalResult[pos].value = `R$${Number(result.body[pos].high).toLocaleString()}`
        currenciesArray.push(finalResult[pos])
        delete finalResult[pos].high
      }
      console.log(finalResult)
      return new Promise((resolve) => resolve(currenciesArray))
    } else {
      return Promise.resolve(null)
    }
  }
}
