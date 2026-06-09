// Чистый компонент
// В нем только возврат разметки, работа с props и хуки

export function ProductItem(props) {
  return (
    <div className="product-item">
        <div className="product-image">
            <img src={props.image} />
        </div>
        <div className="product-title">{props.title}</div>
        <div className="product-seller">{props.seller}</div>
        <div className="item-add-form">
            <span className="product-price">{props.price} руб.</span>
            <button className="add-btn">Добавить</button>
        </div>
    </div>
  )
}