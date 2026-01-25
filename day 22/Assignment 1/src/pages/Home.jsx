import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="page-container home-page">
            <div className="hero-content">
                <h1 className="hero-title">
                    Welcome to <span className="highlight">Nexus</span>
                </h1>
                <p className="hero-subtitle">
                    Explore users, discover inspiring quotes, and connect with us through our seamless application built with React Router.
                </p>
                <div className="hero-actions">
                    <Link to="/users" className="btn btn-primary">
                        Explore Users <ArrowRight size={18} />
                    </Link>
                    <Link to="/quotes" className="btn btn-secondary">
                        View Quotes
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
