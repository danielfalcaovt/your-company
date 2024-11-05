import { ICurrency } from '../protocols/currency'

export interface IGetCurrencyHistory {
  getHistory: (code: string, days: number) => Promise<ICurrency[] | null>
}
