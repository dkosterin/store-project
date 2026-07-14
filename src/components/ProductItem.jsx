// Чистый компонент
// В нем только возврат разметки, работа с props и хуки

export function ProductItem({product, dispatch}) {
  return (
    <div className="product-item">
        <div className="product-image">
            <img src={product.image} />
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