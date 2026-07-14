import { useMemo } from 'react'
import { products } from '../data/products.js'
import { ProductItem } from './ProductItem.jsx'
import '../styles/App.css'

function ProductList({search}) {
  const filteredProducts = useMemo(() => products.filter(product => 
    product.title.toLowerCase().includes(search.toLowerCase())), [search]);

  return (
    <div className="products-list">
      {
        filteredProducts.map(product => {
          return <ProductItem key={product.id} product={product} />
        })
      }
    </div>
  )
}

export default ProductList