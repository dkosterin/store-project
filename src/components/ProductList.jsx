import { useMemo } from 'react'
import { ProductItem } from './ProductItem.jsx'
import '../styles/App.css'

function ProductList({products, search}) {
  const filteredProducts = useMemo(() => products.filter(product => 
    product.title.toLowerCase().includes(search.toLowerCase())), 
    [products, search]);

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