import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaMoon, FaSun, FaPlus, FaMinus } from 'react-icons/fa';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import ThemeContext from '../store/ThemeContext.jsx'; // ✅ Import ThemeContext

export default function Header({ onSearch }) {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const { theme, toggleTheme, fontSize, increaseFont, decreaseFont } = useContext(ThemeContext); // ✅ Destructure controls

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} onClick={() => navigate("/")} className='mainpage-logo' alt="A restaurant" />
        <h1>Foodiee</h1>
      </div>

      <nav className='nav-container'>
        <div className='search-bar'>
          <input type="text" placeholder='  Search item...' onChange={(e) => onSearch(e.target.value)} />
          <FaSearch className='search-icon' />
        </div>

        <div className="controls">
          <button onClick={decreaseFont}><FaMinus /></button>
          <button onClick={increaseFont}><FaPlus /></button>
          <button onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>
        </div>

        <div className="cart-container" onClick={handleShowCart}>
          <FaShoppingCart className='cart-icon' />
          <span className="cart-text">Cart ({totalCartItems})</span>
        </div>
      </nav>
    </header>
  );
}