import { ProductItem } from './ProductItem.jsx'
import '../styles/App.css'

export function ProductList() {
  let products = [
    {
      id: 1,
      title: "Кросовки",
      seller: "Продавец",
      price: 1000,
      image: "./men-athletic-shoes-white.jpg"
    },
    {
      id: 2,
      title: "Другие кроссовки",
      seller: "Продавец",
      price: 600,
      image: "./men-brown-flat-sneakers.jpg"
    },
    {
      id: 3,
      title: "Рубашка",
      seller: "Продавец",
      price: 1500,
      image: "./men-golf-polo-t-shirt-gray.jpg"
    },
  ]

  return (
    <div className="products-list">
      {
        products.map(product => {
          return <ProductItem key={product.id} {...product} />
        })
      }
    </div>
  )
}