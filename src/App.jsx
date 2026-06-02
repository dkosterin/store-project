import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <div className="header">
        <div><a href="index.html">Магазин</a></div>
        <div><a href="checkout.html">Корзина</a></div>
    </div>
  )
}

function ProductItem(props) {
  return (
    <div className="product-item">
        <div className="product-image">
            <img src={props.image} />
        </div>
        <div className="product-title">{props.title}</div>
        <div className="product-sailer">{props.sailer}</div>
        <div className="item-add-form">
            <span className="product-price">{props.price} руб.</span>
            <button className="add-btn">Добавить</button>
        </div>
    </div>
  )
}

function ProductList() {
  let products =[
    {
      id: 1,
      title: "Кросовки",
      sailer: "Продавец",
      price: 1000,
      image: "./men-athletic-shoes-white.jpg"
    },
    {
      id: 2,
      title: "Другие кроссовки",
      sailer: "Продавец",
      price: 600,
      image: "./men-brown-flat-sneakers.jpg"
    },
    {
      id: 3,
      title: "Рубашка",
      sailer: "Продавец",
      price: 1500,
      image: "./men-golf-polo-t-shirt-gray.jpg"
    },
  ]

  return (
    <div class="products-list">
      {
        products.map(product => {
          return <ProductItem key={product.id} {...product} />
        })
      }
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  )
}

export default App
