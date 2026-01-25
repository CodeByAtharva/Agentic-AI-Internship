import React from 'react';

const Dashboard = () => {
    return (
        <div className="page-container dashboard-page">
            <div className="content-card">
                <h1>Dashboard</h1>
                <p>Welcome to the protected area! only authenticated users can see this.</p>
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>Visits</h3>
                        <p className="stat-value">12,345</p>
                    </div>
                    <div className="stat-card">
                        <h3>Sales</h3>
                        <p className="stat-value">$8,900</p>
                    </div>
                    <div className="stat-card">
                        <h3>Active</h3>
                        <p className="stat-value">45%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
