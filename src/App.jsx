import { useState } from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { ProductList } from './components/ProductList.jsx'
import { CheckoutPage } from './pages/checkout.jsx'

// npm install react-router
// npm install react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="checkout.html" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
