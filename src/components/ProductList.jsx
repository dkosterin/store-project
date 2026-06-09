import { products } from '../data/products.js'
import { ProductItem } from './ProductItem.jsx'
import '../styles/App.css'

export function ProductList() {
  

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