import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import "./EstiloGlobal.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default App

