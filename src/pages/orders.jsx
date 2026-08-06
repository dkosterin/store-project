import { useState, useEffect } from "react";
import { OrderItem } from "../components/OrderItem";
import "../styles/orders.css";

/*
1. Получить заказы с сервера
2. Отобразить эти заказы. Сделать компонент OrderItem({order})
*/

function OrdersPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/orders")
        .then(response => response.json())
        .then(data => setOrders(data));
    }, []);

    return (
        <>
        <div className="orders-container">
            <div className="orders-title">Заказы:</div>
            <div className="orders-grid">
            {orders.map(order => {
                return <OrderItem key={order.id} order={order} />
            })}
            </div>
        </div>
        </>
    )
}

export default OrdersPage;