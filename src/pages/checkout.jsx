import '../styles/checkout.css'

export function CheckoutPage() {
  return (
    <>
      <div className="checkout-page">
        <div className="page-title">Корзина</div>

        <div className="checkout-grid">
          <div className="order-summary">
            <div className="cart-item-container">
              <div className="delivery-date">
                Дата доставки: Вторник, 11 июня
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image"
                  src="./men-athletic-shoes-white.jpg" />

                <div className="cart-item-details">
                  <div className="product-name">
                    Название
                  </div>
                  <div className="product-price">
                    1000 руб.
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
            </div>

            <div className="cart-item-container">
              <div className="delivery-date">
                Доставка: Среда, 15 июня
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image"
                  src="./men-brown-flat-sneakers.jpg" />

                <div className="cart-item-details">
                  <div className="product-name">
                    Название
                  </div>
                  <div className="product-price">
                    1000 руб.
                  </div>
                </div>

                <div className="delivery-options">
                  <div className="delivery-options-title">
                    Доставка:
                  </div>

                  <div className="delivery-option">
                    <input type="radio" className="delivery-option-input"
                      name="delivery-option-2" />
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
                    <input type="radio" checked className="delivery-option-input"
                      name="delivery-option-2" />
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
                    <input type="radio" className="delivery-option-input"
                      name="delivery-option-2" />
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
            </div>
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