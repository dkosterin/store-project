import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from '../components/CartItem.jsx'
import '../styles/checkout.css';


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

              <button className="place-order-button button-primary">
                Оформить заказ
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutPage