import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Announcement.css';
import image1 from '../../PIC/Announcement/1.jpg';
import image2 from '../../PIC/Announcement/2.jpg';
import image3 from '../../PIC/Announcement/3.jpg';
import image4 from '../../PIC/Announcement/4.jpg';
import image5 from '../../PIC/Announcement/5.jpg';

const announcements = [
  {
    image: image1,
    text: 'We are excited to invite you to "Logo Designing," an IoT model expo organized by the DIET ACM members as part of IIC.',
    detailPath: '/logo-designing', // Unique path for detail page
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeam55zjVkExIrPvk1XZBLqAqy5wP4E9RBchcz9sn4MZ4EIeg/viewform',
  },
  {
    image: image2,
    text: 'We are excited to invite you to "Logic Master," an IoT model expo organized by the DIET ACM members as part of IIC.',
    detailPath: '/logic-master',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeam55zjVkExIrPvk1XZBLqAqy5wP4E9RBchcz9sn4MZ4EIeg/viewform',
  },
  {
    image: image3,
    text: 'We are excited to invite you to "Tech Talk," an IoT model expo organized by the DIET ACM members as part of IIC.',
    detailPath: '/tech-talk',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeam55zjVkExIrPvk1XZBLqAqy5wP4E9RBchcz9sn4MZ4EIeg/viewform',
  },
  {
    image: image4,
    text: 'We are excited to invite you to "Model Expo," an IoT model expo organized by the DIET ACM members as part of IIC.',
    detailPath: '/model-expo',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeam55zjVkExIrPvk1XZBLqAqy5wP4E9RBchcz9sn4MZ4EIeg/viewform',
  },
  {
    image: image5,
    text: 'We are excited to invite you to "Innovation Fest," an IoT model expo organized by the DIET ACM members as part of IIC.',
    detailPath: '/innovation-fest',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeam55zjVkExIrPvk1XZBLqAqy5wP4E9RBchcz9sn4MZ4EIeg/viewform',
  },
];

const Announcement = () => {
  const navigate = useNavigate();

  return (
    <div className="announcement-container">
      <h2 className="announcement-title">Announcements</h2>
      {announcements.map((announcement, index) => (
        <div key={index} className="announcement-item">
          <img src={announcement.image} alt="Announcement" className="announcement-image" />
          <div className="announcement-text">
            <p>{announcement.text}</p>
          </div>
          <div className="announcement-buttons">
            <button
              className="announcement-button"
              onClick={() => navigate(announcement.detailPath)} // Navigate to detail page
            >
              See Details
            </button>
            <button
              className="announcement-button"
              onClick={() => window.open(announcement.registerLink, "_blank")} // Open registration link
            >
              Register Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcement;
