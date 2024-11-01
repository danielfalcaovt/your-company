import { ICurrency } from '@/domain/protocols/currency'
import { ICurrencyApi } from '@/domain/usecases/currency-api'
import { IRemoteCurrencyApi } from '../protocols/iremote-currency-api'

export class CurrencyApi implements ICurrencyApi {
  constructor (private readonly remoteCurrencyApi: IRemoteCurrencyApi) {}
  async getCurrency (currencies: string): Promise<ICurrency[]> {
    const result = await this.remoteCurrencyApi.getCurrency(currencies)
    return result
  }
}
