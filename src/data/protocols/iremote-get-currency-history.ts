import { ICurrency } from '@/domain/protocols/currency'

export interface IRemoteGetCurrencyHistory {
  getHistory: (code: string, days: number) => Promise<ICurrency[]>
}
