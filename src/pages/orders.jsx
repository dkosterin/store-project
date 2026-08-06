import "../styles/orders.css";

/*
1. Получить заказы с сервера
2. Отобразить эти заказы. Сделать компонент OrderItem({order})
*/

function OrdersPage() {
    return (
        <>
        <div className="orders-container">
            <div className="orders-title">Заказы:</div>
            <div className="orders-grid">
                <div className="order-cart">
                    <div className="order-info">
                        <p className="order-date">Заказ от 12.06.2026</p>
                        <p className="order-price">Стоимость: 1000 руб.</p>
                    </div>
                    <div className="order-products-list">
                        <div className="product-info">
                            <img src="men-athletic-shoes-white.jpg" />
                            <p>Доставка: 12 августа</p>
                        </div>
                        <div className="product-info">
                            <img src="men-athletic-shoes-white.jpg" />
                            <p>Доставка: 12 августа</p>
                        </div>
                    </div>
                </div>
                <div className="order-cart">
                    <div className="order-info">
                        <p className="order-date">Заказ от 12.06.2026</p>
                        <p className="order-price">Стоимость: 1000 руб.</p>
                    </div>
                    <div className="products-list">
                        <div className="product-info">
                            <img src="men-athletic-shoes-white.jpg" />
                            <p>Доставка: 12 августа</p>
                        </div>
                        <div className="product-info">
                            <img src="men-athletic-shoes-white.jpg" />
                            <p>Доставка: 12 августа</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default OrdersPage;