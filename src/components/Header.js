import React, { Component } from 'react';
import Logo from '../assets/Logo.png';
import '../scss/main.scss';

class Header extends Component {
    render() {
        return (
            <div className='Header'>
               <img src={Logo} alt='Logo' />


                
                
            </div>
        );
    }
}

export default Header;