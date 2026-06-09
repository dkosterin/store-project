// Чистый компонент
// В нем только возврат разметки, работа с props и хуки

export function ProductItem({product, onAdd}) {
  return (
    <div className="product-item">
        <div className="product-image">
            <img src={product.image} />
        </div>
        <div className="product-title">{product.title}</div>
        <div className="product-seller">{product.seller}</div>
        <div className="item-add-form">
            <span className="product-price">{product.price} руб.</span>
            <button onClick={onAdd} className="add-btn">Добавить</button>
        </div>
    </div>
  )
}