import React from 'react';
import '../assets/css/Dashboard.css';
import store from '../Redux/Store';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
    const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/'); 
  }
  return (
    <div className="user-dashboard-container">
      <header className="user-dashboard-header">
        <div className="user-info">
          <img
            src="https://cdn.pixabay.com/photo/2014/03/25/16/32/user-297330_640.png"
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="user-details">
          <h1 className="welcome-text">Welcome, {store.getState().email}</h1>
            <p>Email: {store.getState().email}</p>
          </div>
        </div>
        
        <button className="logout-button" onClick={handleLogout}> LogOut</button>
      </header>
      <main className="user-dashboard-content">
        <section className="orders">
          <h2>Your Orders</h2>
          {<p>order 1</p>}
          {/* Each order should have order details and status */}
        </section>
        <section className="account-details">
          <h2>Account Details</h2>
          {/* Display user's account information */}
          <div className="account-info">
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
        </section>
        <section className="payment-details">
          <h2>Payment Details</h2>
          {/* Display user's payment information */}
          <div className="payment-info">
            <p>Card Type: Visa</p>
            <p>Card Number: **** **** **** 1234</p>
            <p>Expiry Date: 12/24</p>
          </div>
        </section>
      </main>
      <section className="recommended-books">
        <h2>Recommended Books</h2>
        {<p> money book</p>}
        {/* Each book should have cover image, title, and author */}
      </section>
      <section className="recent-reviews">
        <h2>Recent Reviews</h2>
        {/* Display a list of recent book reviews */}
        {/* Each review should have book cover, title, and review content */}
      </section>
    </div>
  );
}

export default UserDashboard;
