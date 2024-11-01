import { ICurrency } from '@/domain/protocols/currency'

export interface IRemoteCurrencyApi {
  getCurrency: (currencies: string) => Promise<ICurrency[] | null>
}
