import React from 'react'
import ContextProvider from '../context/context-provider'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/app-routes'

export default function Routes (): JSX.Element {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ContextProvider>
  )
}
