import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Globe, ArrowRight } from 'lucide-react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch users');
                return response.json();
            })
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="page-container loading-container">
                <div className="loader"></div>
                <p>Loading Users...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-container error-container">
                <h2>Error</h2>
                <p>{error}</p>
                <button className="btn btn-secondary" onClick={() => window.location.reload()}>Try Again</button>
            </div>
        );
    }

    return (
        <div className="page-container">
            <h1 className="page-title">User Directory</h1>
            <div className="users-grid">
                {users.map(user => (
                    <Link to={`/users/${user.id}`} key={user.id} className="user-card">
                        <div className="user-avatar-placeholder">
                            {user.name.charAt(0)}
                        </div>
                        <div className="user-info">
                            <h3>{user.name}</h3>
                            <p className="user-detail-row">
                                <User size={14} /> @{user.username}
                            </p>
                            <p className="user-detail-row">
                                <Mail size={14} /> {user.email}
                            </p>
                            <p className="user-detail-row">
                                <Globe size={14} /> {user.website}
                            </p>
                        </div>
                        <div className="user-card-footer">
                            <span>View Profile</span>
                            <ArrowRight size={16} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Users;
