import { useMemo } from 'react'
import { products } from '../data/products.js'
import { ProductItem } from './ProductItem.jsx'
import '../styles/App.css'

function ProductList({cart, setCart, search}) {
  const filteredProducts = useMemo(() => products.filter(product => 
    product.title.toLowerCase().includes(search.toLowerCase())), [search]);

  return (
    <div className="products-list">
      {
        filteredProducts.map(product => {
          return <ProductItem key={product.id} product={product} 
            onAdd={() => {
              if (cart.find((item) => item.id === product.id)) {
                setCart(cart.map((item) => item.id === product.id ? 
                  {...item, quantity: item.quantity + 1} :
                  {...item}));
              }
              else {
                setCart([...cart, {...product, quantity: 1}]);
              }
            }} />
        })
      }
    </div>
  )
}

export default ProductList