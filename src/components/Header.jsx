import { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

export function Header({cartLength, onSearch}) {
  const searchRef = useRef(null);

  function handleSearch() {
    // Если поле поиска пустое, передвинуть в поле курсор
    // В противном случае "поиск"
    //console.log(searchRef.current.value);
    if (searchRef.current.value === "") {
      searchRef.current.focus();
      onSearch("");
    }
    else {
      onSearch(searchRef.current.value);
      //console.log(`Поиск: ${searchRef.current.value}`);
    }
  }

  return (
    <div className="header">
        <div><Link to="/">Магазин</Link></div>
        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Поиск" 
            ref={searchRef} />
          <button onClick={handleSearch} className="search-button">Найти</button>
        </div>
        <div className="right-section">
          <div><Link to="orders">Заказы</Link></div>
          <div><Link to="checkout">Корзина {cartLength > 0 && `(${cartLength})`}</Link></div>
        </div>
    </div>
  )
}