import { ICurrency } from '../protocols/currency'

export interface ICurrencyApi {
  getCurrency: (currency: string) => Promise<ICurrency>
}
