import { ICurrency } from '@/domain/protocols/currency'
import { createContext, Dispatch, SetStateAction } from 'react'

export interface CurrencyDataType {
  value: string
  pctChange: string
  code: string
  name: string
  lastDays?: ICurrency[]
  timestamp: string
  low: string
  favorite?: number
  high: string
  variation: string
}

type currencyDataContextType = {
  CurrencyData: CurrencyDataType[]
  setCurrencyData: Dispatch<SetStateAction<CurrencyDataType[]>>
}

export const CurrencyDataContext = createContext<currencyDataContextType>({
  CurrencyData: [{
    code: '',
    pctChange: '',
    value: '',
    name: '',
    timestamp: '',
    low: '',
    favorite: 0,
    variation: '',
    high: '',
    lastDays: []
  }],
  setCurrencyData () {}
})
