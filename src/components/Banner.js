import React, { Component } from 'react';
import MountainPng from '../assets/Mountain.png';
import SeaPng from '../assets/Sea.png';


class Banner extends Component {
  render() {
    const { image, text } = this.props;
    
    return (
      <div className="banner">
        <img src={image} alt="Banner" className="banner-image" />
        <h2 className="banner-text">{text}</h2>
      </div>
    );
  }
}
export default Banner;