import { useState, lazy, Suspense } from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header.jsx'
// import { ProductList } from './components/ProductList.jsx'
// import { CheckoutPage } from './pages/checkout.jsx'
const ProductList = lazy(() => import('./components/ProductList.jsx'));
const CheckoutPage = lazy(() => import('./pages/checkout.jsx'))

// Ленивая загрузка lazy loading

// https://github.com/dkosterin/store-project
// npm install react-router
// npm install react-router-dom

function Hello() {
  return <h1>Загружаюсь...</h1>
}

function App() {
  const [cart, setCart] = useState([{
      id: 1,
      title: "Кросовки",
      price: 1000,
      image: "./men-athletic-shoes-white.jpg",
      quantity: 1
    },
    {
      id: 2,
      title: "Другие кроссовки",
      price: 600,
      image: "./men-brown-flat-sneakers.jpg",
      quantity: 2
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
