import { products } from '../data/products.js'
import { ProductItem } from './ProductItem.jsx'
import '../styles/App.css'

export function ProductList({cart, setCart}) {
  return (
    <div className="products-list">
      {
        products.map(product => {
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