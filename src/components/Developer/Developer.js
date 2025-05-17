import React from 'react';
import './Developer.css';
import vijayImage from '../PIC/Developer/vijay.png';
import padmaImage from '../PIC/Developer/padma.png';
import chatGPTImage from '../PIC/Developer/chatGPT.png';

const Developer = () => {
  return (
    <div className="developer-container">
      <h1 className="developer-title">Developer Page</h1>

      <div className="section">
        <h2 className="section-title designer-title">Designer</h2>
        <p className="description">
          The designing of the DIET ACM Chapter website was entirely done using Figma. We focused on creating a visually appealing and user-friendly design to engage users effectively.
        </p>
        <div className="team">
          <div className="team-member">
            <img src={vijayImage} alt="Vijay" className="team-photo" />
            <p className="team-name">CHINNI VIJAY KUMAR</p>
          </div>
          <div className="team-member">
            <img src={padmaImage} alt="Padma" className="team-photo" />
            <p className="team-name">K. PADMA SRI</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title developer-title">Developer</h2>
        <p className="description">
          The development of the DIET ACM Chapter website was implemented using ReactJS, CSS, and other modern technologies. ChatGPT provided valuable assistance with coding, debugging, and implementing various features.
        </p>
        <div className="team">
          <div className="team-member">
            <img src={vijayImage} alt="Vijay" className="team-photo" />
            <p className="team-name">CHINNI VIJAY KUMAR</p>
          </div>
          <div className="team-member">
            <img src={chatGPTImage} alt="ChatGPT" className="team-photo" />
            <p className="team-name">ChatGPT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
