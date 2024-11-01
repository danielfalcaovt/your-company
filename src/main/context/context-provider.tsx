import React, { useState } from 'react'
import { CurrencyDataContext, CurrencyDataType } from './currency-data-context'

export default function ContextProvider ({ children }: any): JSX.Element {
  const [CurrencyData, setCurrencyData] = useState<CurrencyDataType>({
    code: '',
    pctChange: '',
    value: ''
  })
  return (
    <CurrencyDataContext.Provider value={{ CurrencyData, setCurrencyData }}>
      {children}
    </CurrencyDataContext.Provider>
  )
}
