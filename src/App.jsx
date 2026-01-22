import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
