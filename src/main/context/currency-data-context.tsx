import { createContext, Dispatch, SetStateAction } from 'react'

export interface CurrencyDataType {
  code: string
  pctChange: string
  value: string
}

type currencyDataContextType = {
  CurrencyData: CurrencyDataType
  setCurrencyData: Dispatch<SetStateAction<CurrencyDataType>>
}

export const CurrencyDataContext = createContext<currencyDataContextType>({
  CurrencyData: {
    code: '',
    pctChange: '',
    value: ''
  },
  setCurrencyData () {}
})
