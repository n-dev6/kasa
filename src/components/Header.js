import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import '../scss/main.scss'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} alt="Logo" />
        <ul className="header-right">
          <NavLink
            to="/"
            style={{
              marginRight: '50px',
              marginLeft: '-10px',
              textDecoration:
                window.location.pathname === '/' ? 'underline' : 'none',
            }}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/About"
            style={{
              marginRight: '40px',
              marginLeft: '10px',
              textDecoration:
                window.location.pathname === '/About' ? 'underline' : 'none',
            }}
          >
            A Propos
          </NavLink>
        </ul>
      </div>
    )
  }
}

export default Header
