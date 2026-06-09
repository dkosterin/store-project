import '../styles/checkout.css'

function CartItem({product, onRemove}) {
  return (
    <div className="cart-item-container">
      <div className="delivery-date">
        Дата доставки: Вторник, 11 июня
      </div>

      <div className="cart-item-details-grid">
        <img className="product-image"
          src={product.image} />

        <div className="cart-item-details">
          <div className="product-name">
            {product.title}
          </div>
          <div className="product-price">
            {product.price} руб.
          </div>
        </div>

        <div className="delivery-options">
          <div className="delivery-options-title">
            Доставка:
          </div>
          <div className="delivery-option">
            <input type="radio" checked
              className="delivery-option-input"
              name="delivery-option-1" />
            <div>
              <div className="delivery-option-date">
                Четверг, 4 июня
              </div>
              <div className="delivery-option-price">
                Бесплатно
              </div>
            </div>
          </div>
          <div className="delivery-option">
            <input type="radio"
              className="delivery-option-input"
              name="delivery-option-1" />
            <div>
              <div className="delivery-option-date">
                Среда, 3 июня
              </div>
              <div className="delivery-option-price">
                120 руб.
              </div>
            </div>
          </div>
          <div className="delivery-option">
            <input type="radio"
              className="delivery-option-input"
              name="delivery-option-1" />
            <div>
              <div className="delivery-option-date">
                Вторник, 2 июня
              </div>
              <div className="delivery-option-price">
                350 руб.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-part">
        <button onClick={onRemove} className='remove-btn'>Удалить</button>
        <div>Количество: {product.quantity}</div>
      </div>
    </div>
  )
}

export function CheckoutPage({ cart, setCart }) {
  console.log(cart);
  return (
    <>
      <div className="checkout-page">
        <div className="page-title">Корзина</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {cart.map((item => <CartItem key={item.id} product={item} 
              onRemove={() => {
                if (item.quantity > 1) {
                  setCart(cart.map((cartItem) => cartItem.id === item.id ? 
                    {...cartItem, quantity: cartItem.quantity - 1} : 
                    {...cartItem}));
                }
                else {
                  setCart(cart.filter((cartItem) => cartItem.id != item.id));
                }
              }
            } />))}
          </div>

          <div className="payment-summary">
              <div className="payment-summary-title">
                Оплата
              </div>

              <div className="payment-summary-row">
                <div>Товары (2):</div>
                <div className="payment-summary-money">2000 руб.</div>
              </div>

              <div className="payment-summary-row">
                <div>Доставка:</div>
                <div className="payment-summary-money">120 руб.</div>
              </div>

              <div className="payment-summary-row total-row">
                <div>Всего:</div>
                <div className="payment-summary-money">2120 руб.</div>
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