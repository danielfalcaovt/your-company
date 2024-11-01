import makeHomePage from '@/main/factory/home-page/make-home-page'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

export default function AppRoutes (): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={makeHomePage()} />
    </Routes>
  )
}
