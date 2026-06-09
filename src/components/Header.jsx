import { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

export function Header() {
  const searchRef = useRef(null);

  function onSearch() {
    // Если поле поиска пустое, передвинуть в поле курсор
    // В противном случае "поиск"
    //console.log(searchRef.current.value);
    if (searchRef.current.value === "") {
      searchRef.current.focus();
    }
    else {
      console.log(`Поиск: ${searchRef.current.value}`);
    }
  }

  return (
    <div className="header">
        <div><Link to="/">Магазин</Link></div>
        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Поиск" 
            ref={searchRef} />
          <button onClick={onSearch} className="search-button">Найти</button>
        </div>
        <div className="right-section">
          <div><Link to="orders">Заказы</Link></div>
          <div><Link to="checkout">Корзина (2)</Link></div>
        </div>
    </div>
  )
}