import { width } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import React, { Component } from 'react';


class Banner extends Component {
  render() {
    const { image, text, width, height } = this.props;

    
    return (
      <div className="banner">
        <img src={image} width={width} height={height}  alt="Banner" className="banner-image" />
        <h2 className="banner-text">{text}</h2>
      </div>
    );
  }
}
export default Banner;