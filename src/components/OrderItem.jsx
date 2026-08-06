function formatDate(isoDate) {
    const date = new Date(isoDate);
    const normalDate = date.toLocaleString("ru-RU", {day: "2-digit", 
        month: "2-digit", year: "numeric"});

    return normalDate;
}

export function OrderItem({order}) {
    return (
        <div className="order-cart">
            <div className="order-info">
                <p className="order-date">Заказ от {formatDate(order.date)}</p>
                <p className="order-price">Стоимость: {order.totalPrice} руб.</p>
            </div>
            <div className="order-products-list">
                {order.products.map(product => {
                    return (
                        <div key={product.id}>
                            <div className="product-info">
                                <img src={`http://localhost:8000/${product.image}`} />
                                <p>Доставка: {formatDate(product.deliveryDate)}</p>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}