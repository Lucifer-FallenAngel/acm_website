import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../PIC/Announcement/2.jpg';
import './AnnouncementDetails.css';

const LogoDesigning = () => {
  const navigate = useNavigate();

  return (
    <div className="announcement-detail-container">
      <button className="back-button" onClick={() => navigate('/')}>← Back</button>
      <h2 className="h2">Logic Master</h2>
      <div className="announcement-content">
        <img src={image1} alt="Logo Designing" className="announcement-detail-image" />
        <div className="announcement-text">
          <p>
            We are excited to invite you to "Logic Master," an IoT model expo organized by the DIET ACM members as part of IIC.
          </p>
          <p><strong>Date:</strong> August 28, 2024</p>
          <p><strong>Time:</strong> 2:00 PM - 4:00 PM</p>
          <p><strong>Location:</strong> Lobby</p>
        </div>
      </div>
      <button
        className="register-button"
        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeam55zjVkExIrPvk1XZBLqAqy5wP4E9RBchcz9sn4MZ4EIeg/viewform', '_blank')}
      >
        Register Now
      </button>
    </div>
  );
};

export default LogoDesigning;
