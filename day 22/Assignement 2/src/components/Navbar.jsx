import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">SecureApp</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                {isAuthenticated && (
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                )}
                {isAuthenticated ? (
                    <button onClick={handleLogout} className="btn btn-logout">Logout</button>
                ) : (
                    <Link to="/login" className="btn btn-login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
