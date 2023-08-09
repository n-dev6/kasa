import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const MonComposant = ({ rating }) => {
  const maxRating = 5; 
  const getRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={solidStar} className='active'  />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={solidStar} />);
      }
    }
    return stars;
  };

  return (
    <div>  
      <span className='rating-stars'>{getRatingStars()}</span>
    </div>
  );
};

export default MonComposant;