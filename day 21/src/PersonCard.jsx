import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaCalendar, FaMapMarkedAlt, FaPhone, FaLock } from 'react-icons/fa';
import './PersonCard.css';

const PersonCard = ({ person, loading }) => {
  const [activeTab, setActiveTab] = useState('name');
  const [displayTitle, setDisplayTitle] = useState('Hi, My name is');
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    if (person) {
      handleHover('name'); // Reset to name when person changes
    }
  }, [person]);

  const handleHover = (tab) => {
    if (!person) return;
    setActiveTab(tab);
    switch (tab) {
      case 'name':
        setDisplayTitle('Hi, My name is');
        setDisplayValue(`${person.name.first} ${person.name.last}`);
        break;
      case 'email':
        setDisplayTitle('My email address is');
        setDisplayValue(person.email);
        break;
      case 'dob':
        setDisplayTitle('My birthday is');
        // Format date: MM/DD/YYYY
        const date = new Date(person.dob.date);
        setDisplayValue(date.toLocaleDateString());
        break;
      case 'address':
        setDisplayTitle('My address is');
        setDisplayValue(`${person.location.street.number} ${person.location.street.name}`);
        break;
      case 'phone':
        setDisplayTitle('My phone number is');
        setDisplayValue(person.phone);
        break;
      case 'password':
        setDisplayTitle('My password is');
        setDisplayValue(person.login.password);
        break;
      default:
        break;
    }
  };

  if (loading) {
    return (
      <div className="card">
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (!person) return null;

  return (
    <div className="card">
      <div className="card-header">
        <div className="user-img-container">
          <img src={person.picture.large} alt="user" className="user-img" />
        </div>
        <p className="detail-title">{displayTitle}</p>
        <h2 className="detail-value">{displayValue}</h2>
      </div>

      <ul className="icons-list">
        <li>
          <button 
            className={`icon-btn ${activeTab === 'name' ? 'active' : ''}`}
            onMouseEnter={() => handleHover('name')}
          >
            <FaUser />
          </button>
        </li>
        <li>
          <button 
            className={`icon-btn ${activeTab === 'email' ? 'active' : ''}`}
            onMouseEnter={() => handleHover('email')}
          >
            <FaEnvelope />
          </button>
        </li>
        <li>
          <button 
            className={`icon-btn ${activeTab === 'dob' ? 'active' : ''}`}
            onMouseEnter={() => handleHover('dob')}
          >
            <FaCalendar />
          </button>
        </li>
        <li>
          <button 
            className={`icon-btn ${activeTab === 'address' ? 'active' : ''}`}
            onMouseEnter={() => handleHover('address')}
          >
            <FaMapMarkedAlt />
          </button>
        </li>
        <li>
          <button 
            className={`icon-btn ${activeTab === 'phone' ? 'active' : ''}`}
            onMouseEnter={() => handleHover('phone')}
          >
            <FaPhone />
          </button>
        </li>
        <li>
          <button 
            className={`icon-btn ${activeTab === 'password' ? 'active' : ''}`}
            onMouseEnter={() => handleHover('password')}
          >
            <FaLock />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PersonCard;
