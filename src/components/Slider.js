import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImageNumber = currentImageIndex + 1;
  const totalImages = images.length;

  return (
    <div className="slider">
      <div className="slider-counter-container">
         <div className="image-counter">{`${currentImageNumber}/${totalImages}`}</div>
      </div>
      <button onClick={handlePrevImage}>&#8249;</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageNumber}`} />
      <button onClick={handleNextImage}>&#8250;</button>
      
    </div>
  );
};

export default Slider;
