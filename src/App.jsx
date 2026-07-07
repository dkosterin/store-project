import { useState, lazy, Suspense } from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header.jsx'
const ProductList = lazy(() => import('./components/ProductList.jsx'));
const CheckoutPage = lazy(() => import('./pages/checkout.jsx'))

// https://github.com/dkosterin/store-project

function Hello() {
  return <h1>Загружаюсь...</h1>
}

function App() {
  const [cart, setCart] = useState([{
      id: 1,
      title: "Кросовки",
      price: 1000,
      image: "./men-athletic-shoes-white.jpg",
      quantity: 1,
      deliveryOption: 1
    },
    {
      id: 2,
      title: "Другие кроссовки",
      price: 600,
      image: "./men-brown-flat-sneakers.jpg",
      quantity: 2,
      deliveryOption: 2
    },
  ]);

  const [search, setSearch] = useState("");

  /* Что можно сделать:
  1. Перейти на useContext
  2. Перейти к useReducer
  */
  return (
    <BrowserRouter>
      <Header cartLength={cart.length} onSearch={setSearch}/>
      <Suspense fallback={<Hello />}>
        <Routes>
          <Route index element={<ProductList cart={cart} 
            setCart={setCart} search={search}/>} />
          <Route path="checkout" element={<CheckoutPage cart={cart} 
            setCart={setCart} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
