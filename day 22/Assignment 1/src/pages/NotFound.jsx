import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="page-container not-found-container">
            <div className="not-found-content">
                <h1 className="error-code">404</h1>
                <h2>Page Not Found</h2>
                <p>The page you are looking for doesn't exist or has been moved.</p>
                <Link to="/" className="btn btn-primary">
                    <Home size={18} /> Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
