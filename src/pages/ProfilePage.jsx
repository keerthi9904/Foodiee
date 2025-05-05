import './ProfilePage.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaMapMarkerAlt, FaWallet, FaInfoCircle, FaClipboardList, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function ProfilePage() {
  const navigate = useNavigate();
  function handleBackClick() {
    navigate("/main"); // Navigate back to the main page
  }
  return (
    <div className="profile-page">
      <button className="back-button" onClick={handleBackClick}>
        <AiOutlineArrowLeft size={24} />
      </button>
      <aside className="sidebar">
        <div className="profile-header">
          {/* <div className="profile-circle" /> */}
            <img src="avatar.jpg" alt="" className='avatar'/>
          <div>
            <h2>Neha</h2>
            <p>+91 7730065218</p>
            <a href="#">Edit profile</a>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li className="active"><FaClipboardList /> My Orders <FaChevronRight className="chevron" /></li>
          <li><FaMapMarkerAlt /> Manage Address <FaChevronRight className="chevron" /></li>
          <li><FaWallet /> Wallet Transactions <span className="new-tag">NEW</span> <FaChevronRight className="chevron" /></li>
          <li><FaWallet /> Sure Points <FaChevronRight className="chevron" /></li>
          <li><FaInfoCircle /> About Foodiee <FaChevronRight className="chevron" /></li>
          <li><FaInfoCircle /> Terms And Conditions <FaChevronRight className="chevron" /></li>
        </ul>
      </aside>

      <main className="orders-content">
        <h2>My Orders</h2>
        <p>Showing all 1 order</p>

        <div className="order-card">
          <div className="order-status">✔ Order Delivered</div>
          <div className="order-details">
            <div>
              <strong className="restaurant-name">🍲 The Good Bowl</strong>
              <p>Hyderabadi Egg Biryani Bowl</p>
            </div>
            <div className="price-info">
              <span>₹115</span>
              <small>1 item</small>
            </div>
          </div>
          <div className="ratings-section">
            <p>Rate your Delivery experience</p>
            <p>Rate your Food experience</p>
            {/* You can add emoji/star rating components here */}
          </div>
          <div className="order-actions">
            <button className="reorder-btn">Reorder</button>
            <a href="#">View Order Details</a>
          </div>
        </div>
      </main>
    </div>
  );
}