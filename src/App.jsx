import { useState, lazy, Suspense, useReducer } from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header.jsx'
const ProductList = lazy(() => import('./components/ProductList.jsx'));
const CheckoutPage = lazy(() => import('./pages/checkout.jsx'))

// https://github.com/dkosterin/store-project
// npm install react-router
// npm install react-router-dom

function cartReducer(state, action) {
  switch(action.type) {
    case "ADD_PRODUCT": {
      const product = action.payload;

      if (state.find((item) => item.id === product.id)) {
        return state.map((item) => item.id === product.id ? 
          {...item, quantity: item.quantity + 1} :
          item);
      }
      else {
        return [...state, {...product, quantity: 1, deliveryOption: 1}];
      }
    }

    case "REMOVE_PRODUCT": {
      const item = state.find(
        item => item.id === action.payload
      );

      if (item.quantity > 1) {
        return state.map(cartItem =>
          cartItem.id === action.payload
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1
              }
            : cartItem
        );
      }

      return state.filter(
        cartItem => cartItem.id !== action.payload
      );
    }

    case "CHANGE_DELIVERY": {

      return state.map(cartItem => 
        cartItem.id === action.payload.id ?
        {...cartItem, deliveryOption: action.payload.deliveryOption} : 
        cartItem
      )
    }
    
    default:
      return state;
  }
}


function App() {
  const [cart, dispatch] = useReducer(cartReducer, [{
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
  */
  return (
    <BrowserRouter>
      <Header cartLength={cart.length} onSearch={setSearch}/>
      <Suspense fallback={<div>Загружаюсь...</div>}>
        <Routes>
          <Route index element={<ProductList cart={cart} 
            dispatch={dispatch} search={search}/>} />
          <Route path="checkout" element={<CheckoutPage cart={cart} 
            dispatch={dispatch} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
