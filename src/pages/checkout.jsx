import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from '../components/CartItem.jsx'
import '../styles/checkout.css';

/*
const newOrder = {
  products: массив объектов вида
  {
    id:
    title:
    image:
    price:
    deliveryDate:
    count (то же самое, что и quantity):
  }
  Если deliveryOption === 1, то new Date() + 7 дней
  Если deliveryOption === 2, то new Date() + 4 дня
  Если deliveryOption === 3, то new Date() + 2 дня
}

1. Создать объект newOrder по нажатию на "Оформить заказ"
2. Сделать POST запрос на сервер
*/

function getDeliveryDate(deliveryOption) {
  const date = new Date();
  switch(deliveryOption) {
    case 1:
      date.setDate(date.getDate() + 7);
      break;
    case 2:
      date.setDate(date.getDate() + 4);
      break;
    case 3:
      date.setDate(date.getDate() + 2);
      break;
  }

  return date.toISOString().split("T")[0];
}

function CheckoutPage() {

  const {cart} = useContext(CartContext);
  let itemsCount = 0;
  let price = 0;
  let deliveryPrice = 0;

  for (let item of cart) {
    itemsCount += item.quantity;
    price += item.price * item.quantity;
    if (item.deliveryOption === 2) {
      deliveryPrice += 120;
    }
    else if (item.deliveryOption === 3) {
      deliveryPrice += 350;
    }
  }

  function createOrder() {
    const newOrder = {
      products: cart.map(product => {
        return {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          deliveryDate: getDeliveryDate(product.deliveryOption),
          quantity: product.quantity
        }
      })
    }

    fetch("http://localhost:8000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOrder)
    }).then(response => {
      if (response.ok) {
        console.log("Order created");
      }
    })
  }
  
  return (
    <>
      <div className="checkout-page">
        <div className="page-title">Корзина</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {cart.map((item => <CartItem key={item.id} product={item} />))}
          </div>

          <div className="payment-summary">
              <div className="payment-summary-title">
                Оплата
              </div>

              <div className="payment-summary-row">
                <div>Товары ({itemsCount}):</div>
                <div className="payment-summary-money">{price} руб.</div>
              </div>

              <div className="payment-summary-row">
                <div>Доставка:</div>
                <div className="payment-summary-money">{deliveryPrice} руб.</div>
              </div>

              <div className="payment-summary-row total-row">
                <div>Всего:</div>
                <div className="payment-summary-money">{price + deliveryPrice} руб.</div>
              </div>

              <button className="place-order-button button-primary" onClick={createOrder}>
                Оформить заказ
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutPage