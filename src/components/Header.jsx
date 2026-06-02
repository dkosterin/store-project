import { Link } from 'react-router-dom'
import '../styles/header.css'

export function Header() {
  return (
    <div className="header">
        <div><Link to="/">Магазин</Link></div>
        <div><Link to="checkout.html">Корзина</Link></div>
    </div>
  )
}