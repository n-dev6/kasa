import { width } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import React, { Component } from 'react';


class Banner extends Component {
  render() {
    const { image, text, additionnalBannerClassName} = this.props;

    
    return (
      <div className = {`banner ${additionnalBannerClassName}`} >
        <img src={image}  alt="Banner" className='banner-image' />
        <h2 className="banner-text">{text}</h2>
      </div>
    );
  }
}
export default Banner;