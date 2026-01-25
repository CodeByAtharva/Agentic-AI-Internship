import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="page-container home-page">
            <div className="hero-section">
                <h1>Welcome to SecureApp</h1>
                <p>A demonstration of private routing with React.</p>
                <div className="hero-actions">
                    <Link to="/login" className="btn btn-primary">Get Started</Link>
                    <Link to="/dashboard" className="btn btn-secondary">Go to Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
