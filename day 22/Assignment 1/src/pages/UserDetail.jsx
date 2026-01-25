import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Globe, MapPin, Building, Phone } from 'lucide-react';

const UserDetail = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                if (!response.ok) throw new Error('User not found');
                return response.json();
            })
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [userId]);

    if (loading) return <div className="page-container"><p>Loading User Profile...</p></div>;
    if (error) return <div className="page-container"><p>Error: {error}</p><Link to="/users" className="btn btn-secondary"><ArrowLeft size={16} /> Back to Users</Link></div>;

    return (
        <div className="page-container">
            <Link to="/users" className="back-link">
                <ArrowLeft size={20} /> Back to Directory
            </Link>

            <div className="user-profile-header">
                <div className="profile-avatar-large">
                    {user.name.charAt(0)}
                </div>
                <div className="profile-title">
                    <h1>{user.name}</h1>
                    <p className="username">@{user.username}</p>
                </div>
            </div>

            <div className="profile-grid">
                <div className="profile-card">
                    <h2>Contact Info</h2>
                    <div className="info-list">
                        <div className="info-item">
                            <Mail className="icon" />
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </div>
                        <div className="info-item">
                            <Phone className="icon" />
                            <a href={`tel:${user.phone}`}>{user.phone}</a>
                        </div>
                        <div className="info-item">
                            <Globe className="icon" />
                            <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a>
                        </div>
                    </div>
                </div>

                <div className="profile-card">
                    <h2>Address</h2>
                    <div className="info-list">
                        <div className="info-item">
                            <MapPin className="icon" />
                            <span>
                                {user.address.street}, {user.address.suite}<br />
                                {user.address.city}, {user.address.zipcode}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="profile-card">
                    <h2>Company</h2>
                    <div className="info-list">
                        <div className="info-item">
                            <Building className="icon" />
                            <div>
                                <strong>{user.company.name}</strong>
                                <p className="text-muted">{user.company.catchPhrase}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
