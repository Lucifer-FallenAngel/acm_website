import React, { useState, useEffect } from 'react';
import './First.css'; // Optional for custom styling

// Import all images
import FirstImage1 from '../PIC/Body/First/1.jpg';
import FirstImage2 from '../PIC/Body/First/2.jpg';
import FirstImage3 from '../PIC/Body/First/3.jpg';
import FirstImage4 from '../PIC/Body/First/4.jpg';

const First = () => {
  // Store all images in an array
  const images = [FirstImage1, FirstImage2, FirstImage3, FirstImage4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through images every 5 seconds (or desired duration)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div
      className="first-container"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="overlay"></div>
      
      <div className="overlay-text">
        <h1>Dadi Institute of Engineering & Technology</h1>
        <h2>Diet ACM Student Chapter</h2>
      </div>
    </div>
  );
};

export default First;
