import '../styles/checkout.css'


function CartItem({product, dispatch}) {
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
            <input type="radio" checked={product.deliveryOption === 1}
              onChange={() => dispatch({
                type: "CHANGE_DELIVERY",
                payload: {
                  id: product.id,
                  deliveryOption: 1
                }
              })}
              className="delivery-option-input"
              name={`delivery-option-${product.id}`} />
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
            <input type="radio" checked={product.deliveryOption === 2}
              onChange={() => dispatch({
                type: "CHANGE_DELIVERY",
                payload: {
                  id: product.id,
                  deliveryOption: 2
                }
              })}
              className="delivery-option-input"
              name={`delivery-option-${product.id}`} />
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
            <input type="radio" checked={product.deliveryOption === 3}
              onChange={() => dispatch({
                type: "CHANGE_DELIVERY",
                payload: {
                  id: product.id,
                  deliveryOption: 3
                }
              })}
              className="delivery-option-input"
              name={`delivery-option-${product.id}`} />
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
        <button onClick={() => dispatch({
          type: "REMOVE_PRODUCT",
          payload: product.id
        })} className='remove-btn'>Удалить</button>
        <div>Количество: {product.quantity}</div>
      </div>
    </div>
  )
}

function CheckoutPage({ cart, dispatch }) {

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
            {cart.map((item => <CartItem key={item.id} product={item} 
              dispatch={dispatch} />))}
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