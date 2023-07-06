import React, { Component } from 'react';
import MountainPng from '../assets/Mountain.png';
import SeaPng from '../assets/Sea.png';


class Banner extends Component {
    render() {
        const { image } = this.props;
        
        return (
            <div className="banner">
                <img src={image} alt="Banner" className="banner-image" />
            </div>
        );
    }
}

export default Banner;