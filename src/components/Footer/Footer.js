// src/components/Footer/Footer.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import instagramIcon from '../PIC/Footer/Instagram.svg';
import facebookIcon from '../PIC/Footer/Facebook.svg';
import linkedinIcon from '../PIC/Footer/linkedin.svg';
import locationIcon from '../PIC/Footer/location.png';
import phoneIcon from '../PIC/Footer/phone.png';
import gmailIcon from '../PIC/Footer/Gmail.svg';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer-socials">
        <a href="https://www.instagram.com/diet_acm?igsh=eDY0MGhuYnhweHNp" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100090846908967&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/diet-acm-chapter-846b55328/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
      <div className="footer-contact">
        <div className="contact-item">
          <a href="https://maps.app.goo.gl/gk69jC22ckPV6aTFA" target="_blank" rel="noopener noreferrer">
            <img src={locationIcon} alt="Location" className="contact-icon" />
          </a>
          <div>
            <a href="https://maps.app.goo.gl/gk69jC22ckPV6aTFA" target="_blank" rel="noopener noreferrer" className="contact-link">
              <p className="contact-title">Find us</p>
              <p>Dadi Institute of Engineering and Technology, Anakapalle, Andhra Pradesh</p>
            </a>
          </div>
        </div>
        <div className="contact-item">
          <img src={phoneIcon} alt="Phone" className="contact-icon" />
          <div>
            <p className="contact-title">Call us</p>
            <p>+91XXXXXXXXXX</p>
          </div>
        </div>
        <div className="contact-item">
          <img src={gmailIcon} alt="Gmail" className="contact-icon" />
          <div>
            <p className="contact-title">Mail us</p>
            <p>dietacmchapter@diet.edu.in</p>
          </div>
        </div>
      </div>
      <button className="developer-button" onClick={() => navigate('/developer')}>
        {`{ }`}
      </button>
    </div>
  );
};

export default Footer;
