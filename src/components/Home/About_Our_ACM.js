// src/components/Home/About_Our_ACM.js
import React from 'react';
import './About_Our_ACM.css'
import AboutImage from '../PIC/Body/About/1.png';

const About_Our_ACM = () => {
  return (
    <section style={{ display: 'flex', alignItems: 'center', padding: '20px', backgroundColor: '#f8f8f8' }}>
      <img src={AboutImage} alt="ACM Chapter Illustration" style={{ width: '25%', marginRight: '20px' }} />
      <div> 
        <h2>About our chapter</h2>
        <p>
          Diet ACM student chapter is dedicated to fostering a vibrant community of technology enthusiasts
          and professionals. We organize a variety of events such as hackathons, coding competitions, workshops,
          and guest lectures by industry experts, providing our members with ample opportunities to enhance
          their technical skills and network with peers and mentors. We foster innovation and collaboration,
          bridging the gap between academic learning and practical application. Through these efforts, we aim
          to cultivate a culture of innovation, collaboration, and continuous learning within our community.
        </p>
      </div>
    </section>
  );
};

export default About_Our_ACM;
