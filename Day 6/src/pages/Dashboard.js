import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from './authActions';
import '../assets/css/Dashboard.css'; // Import your dashboard CSS for styling
import { selectUser } from '../redux/userSlice';
export const Dashboard = () => {
    // const user = useSelector((state) => state.user.email);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    console.log(user)
    const handleLogout = () => {
        // Dispatch a logout action
        dispatch(logoutUser());
        // Redirect to the login page (you can use react-router-dom for this)
        navigate('/');
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="logo"></div>
                <ul>
                    <li><Link to="/Dashboard">Home</Link></li>
                    <li><Link to="/academic">Books</Link></li>
                    <li><Link to="/application">Cart</Link></li>
                    <li><Link to="/application">Wishlist</Link></li>
                    <li><Link to="/application">Help</Link></li>
                </ul>
            </div>
            <div className="content">
                <header>
                    <div className="top-nav">
                        <div className="welcome">HI, {user.email}</div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </header>
                <main>
                    {/* Your dashboard content goes here */}
                    <h1>Dashboard</h1>
                    <p>Your purchases.</p>
                    <section className="product-management">
                        <div className="product-card">
                            {/* <img src="product1.jpg" alt="Product 1" class="product-image"> */}
                            <h2 className="product-title">Book 1</h2>
                            <p className="product-description">Sherlock Homes.</p>
                            <p className="product-price">RS 200</p>
                        </div>
                        <div className="product-card">
                            {/* <img src="product1.jpg" alt="Product 1" class="product-image"> */}
                            <h2 className="product-title">Book 2</h2>
                            <p className="product-description">Harry pottter.</p>
                            <p className="product-price">RS 200</p>
                        </div>
                        <div className="product-card">
                            {/* <img src="product1.jpg" alt="Product 1" class="product-image"> */}
                            <h2 className="product-title">Book 3</h2>
                            <p className="product-description">Engineering maths.</p>
                            <p className="product-price">RS 200</p>
                        </div>
                        <div className="product-card">
                            {/* <img src="product1.jpg" alt="Product 1" class="product-image"> */}
                            <h2 className="product-title">Book 4</h2>
                            <p className="product-description">Java.</p>
                            <p className="product-price">RS 200</p>
                        </div>
                        <div className="product-card">
                            {/* <img src="product1.jpg" alt="Product 1" class="product-image"> */}
                            <h2 className="product-title">Book 5</h2>
                            <p className="product-description">C++.</p>
                            <p className="product-price">RS 200</p>
                        </div>
                        <div className="product-card">
                            {/* <img src="product1.jpg" alt="Product 1" class="product-image"> */}
                            <h2 className="product-title">Book 6</h2>
                            <p className="product-description">Python.</p>
                            <p className="product-price">RS 200</p>
                        </div>

                        
                    </section>
                </main>
            </div>
        </div>
    );
}

