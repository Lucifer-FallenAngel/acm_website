// src/components/Home/Team/Team.js
import React from 'react';
import './Team.css';
import pic1 from '../../PIC/Team/1.png';
import pic2 from '../../PIC/Team/2.png';
import pic3 from '../../PIC/Team/3.png';
import pic4 from '../../PIC/Team/4.png';
import pic5 from '../../PIC/Team/5.png';
import pic6 from '../../PIC/Team/6.png';
import pic7 from '../../PIC/Team/7.png';
import pic8 from '../../PIC/Team/8.png';

const teamMembers = [
  { image: pic1, name: 'SRI DADI RATNAKER', title: 'INSTITUTE CHAIRMAN' },
  { image: pic2, name: 'Dr. K. SUJATHA', title: 'FACULTY SPONSOR' },
  { image: pic3, name: 'Mrs. S. VENKATA LAKSHMI', title: 'FACULTY COORDINATOR' },
  { image: pic4, name: 'CHINNI VIJAY KUMAR', title: 'ACM CHAIR' },
  { image: pic5, name: 'K.PADMA', title: 'ACM VICE CHAIR' },
  { image: pic6, name: 'G.VARSHA VENKATA KUMARI', title: 'ACM SECRETARY' },
  { image: pic7, name: 'CHANDANI', title: 'TREASURER' },
  { image: pic8, name: 'AKSHYA', title: 'EVENT' },
];

const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="/Our_Team">
        <button className="Our_Team">Meet the team</button>
      </a>

    </div>
  );
};

export default Team;
