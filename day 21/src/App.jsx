import React, { useState, useEffect } from 'react';
import PersonCard from './PersonCard';
// import './App.css'; // Not using App.css, using index.css for global styles

function App() {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomPerson = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setPerson(data.results[0]);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomPerson();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '0.5rem', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
          Random Person Generator
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
          Hover over icons to see details
        </p>
      </div>

      <PersonCard person={person} loading={loading} />

      <button
        onClick={fetchRandomPerson}
        disabled={loading}
        style={{
          marginTop: '2rem',
          padding: '0.8rem 2rem',
          fontSize: '1rem',
          fontWeight: '600',
          color: '#fff',
          background: 'var(--text-dark)',
          border: 'none',
          borderRadius: '2rem',
          boxShadow: 'var(--shadow-lg)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          opacity: loading ? 0.7 : 1,
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
          }
        }}
        onMouseLeave={(e) => {
          if (!loading) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          }
        }}
      >
        {loading ? 'Loading...' : 'Get Random Person'}
      </button>
    </div>
  );
}

export default App;
