import { ICurrency } from '@/domain/protocols/currency'

export interface IRemoteCurrencyApi {
  getCurrency: (currency: string) => Promise<ICurrency>
}
