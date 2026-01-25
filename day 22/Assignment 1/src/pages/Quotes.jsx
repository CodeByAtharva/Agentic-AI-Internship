import React, { useState, useEffect } from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
            .then(res => res.json())
            .then(data => {
                setQuotes(data.quotes);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <div className="page-container loading-container"><div className="loader"></div><p>Loading Inspiration...</p></div>;

    return (
        <div className="page-container">
            <h1 className="page-title">Daily Inspiration</h1>
            <div className="quotes-grid">
                {quotes.map(quote => (
                    <div key={quote.id} className="quote-card">
                        <QuoteIcon className="quote-icon-bg" size={40} />
                        <p className="quote-text">"{quote.quote}"</p>
                        <p className="quote-author">— {quote.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quotes;
