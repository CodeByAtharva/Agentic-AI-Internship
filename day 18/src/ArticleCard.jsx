import React from 'react';

const Icons = {
    Comment: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
    ),
    Calendar: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
    )
};

const ArticleCard = ({ data }) => {
    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="article-card">
            <div className="card-image-container">
                <img src={data.imageURL} alt={data.title} className="card-image" />
                <span className="category-tag">{data.category}</span>
            </div>

            <div className="card-content">
                <div className="card-date">
                    {formattedDate}
                </div>

                <h2 className="card-title">{data.title}</h2>
                <h3 className="card-subtitle">{data.subTitle}</h3>

                <p className="card-description">
                    {data.description}
                </p>

                <div className="card-footer">
                    <div className="author-info">
                        <div className="author-avatar"></div>
                        <span className="author-name">Sarah Jenkins</span>
                    </div>

                    <div className="card-stats">
                        <div className="stat-item">
                            <Icons.Comment />
                            <span>{data.comments} Comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
