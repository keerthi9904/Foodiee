import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaMoon, FaSun, FaPlus, FaMinus, FaMicrophone, FaUserCircle, FaMapMarkerAlt } from 'react-icons/fa';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import ThemeContext from '../store/ThemeContext.jsx';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Header({ onSearch }) {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const { theme, toggleTheme, fontSize, increaseFont, decreaseFont } = useContext(ThemeContext);

  const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [searchInput, setSearchInput] = useState("");

  const totalCartItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (listening) {
      setSearchInput(transcript);
      onSearch(transcript);
    }
  }, [transcript]);

  function handleInputChange(e) {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  }

  function startListening() {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  }

  function stopListening() {
    SpeechRecognition.stopListening();
  }

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} className='mainpage-logo' alt="A restaurant" onClick={() => navigate("/")}/>
        <div className='brand-info'>
          <h1>Foodiee</h1>
          <div className='location-info'>
            <FaMapMarkerAlt className='location-icon' />
            <select
              className='location-dropdown'
              defaultValue="Guntur"
              onChange={(e) => console.log("Selected location:", e.target.value)}
            >
              <option value="Guntur">Guntur</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Guntur">Banglore</option>
              <option value="Hyderabad">Tirupati</option>
              <option value="Chennai">Mumbai</option>
            </select>
          </div>

        </div>
      </div>

      <nav className='nav-container'>
        <div className='search-bar'>
          <input
            type="text"
            placeholder='Search item...'
            value={searchInput}
            onChange={handleInputChange}
          />
          <FaMicrophone
            className={`microphone-icon ${listening ? 'listening' : ''}`}
            onClick={listening ? stopListening : startListening}
            title={listening ? 'Stop Listening' : 'Start Voice Input'}
          />
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

        <div className="profile-icon" onClick={() => navigate('/profile')}>
          <FaUserCircle />
        </div>

      </nav>
    </header>
  );
}
