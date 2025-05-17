import React, { useState } from 'react';
import './Gallery.css';

// Dynamically import all images
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../PIC/Gallery', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open modal with selected image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Show next image
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Show previous image
  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(index)}>
            <img src={image} alt={`Event ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={images[currentImageIndex]}
              alt={`Event ${currentImageIndex + 1}`}
              className="modal-image"
            />
            <button className="arrow left-arrow" onClick={showPrevImage}>
              &#8592;
            </button>
            <button className="arrow right-arrow" onClick={showNextImage}>
              &#8594;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
