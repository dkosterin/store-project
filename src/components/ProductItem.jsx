import { CartContext } from "../context/CartContext"
import { useContext } from "react"

export function ProductItem({product}) {
  const {dispatch} = useContext(CartContext);

  return (
    <div className="product-item">
        <div className="product-image">
            <img src={`http://localhost:8000/${product.image}`} />
        </div>
        <div className="product-title">{product.title}</div>
        <div className="product-seller">{product.seller}</div>
        <div className="item-add-form">
            <span className="product-price">{product.price} руб.</span>
            <button onClick={() => dispatch({
              type: "ADD_PRODUCT",
              payload: product
            })} className="add-btn">Добавить</button>
        </div>
    </div>
  )
}