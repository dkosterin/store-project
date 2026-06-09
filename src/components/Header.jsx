import { Link } from 'react-router-dom'
import '../styles/header.css'

export function Header() {
  return (
    <div className="header">
        <div><Link to="/">Магазин</Link></div>
        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Поиск" />
          <button className="search-button">Найти</button>
        </div>
        <div className="right-section">
          <div><Link to="orders">Заказы</Link></div>
          <div><Link to="checkout">Корзина (2)</Link></div>
        </div>
    </div>
  )
}