import { useState } from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { ProductList } from './components/ProductList.jsx'
import { CheckoutPage } from './pages/checkout.jsx'

// https://github.com/dkosterin/store-project
// npm install react-router
// npm install react-router-dom

function App() {
  const [cart, setCart] = useState([{
      id: 1,
      title: "Кросовки",
      price: 1000,
      image: "./men-athletic-shoes-white.jpg"
    },
    {
      id: 2,
      title: "Другие кроссовки",
      price: 600,
      image: "./men-brown-flat-sneakers.jpg"
    },
  ]);

  //const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header cartLength={cart.length} />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
