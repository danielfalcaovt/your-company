import { ICurrency } from '@/domain/protocols/currency'
import { IGetCurrencyHistory } from '@/domain/usecases/get-currency-history'
import { IRemoteGetCurrencyHistory } from '../protocols/iremote-get-currency-history'

export class GetCurrencyHistory implements IGetCurrencyHistory {
  constructor (private readonly currencyApi: IRemoteGetCurrencyHistory) {}
  async getHistory (code: string, days: number): Promise<ICurrency[]> {
    const history = await this.currencyApi.getHistory(code, days)
    return history
  }
}
