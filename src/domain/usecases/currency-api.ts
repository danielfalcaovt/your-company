import { ICurrency } from '../protocols/currency'

export interface ICurrencyApi {
  getCurrency: (currencies: string) => Promise<ICurrency[]>
}
