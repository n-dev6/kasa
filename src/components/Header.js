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
            className={{
              active:window.location.pathname === '/'
            }}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/About"
            className={{
              active:window.location.pathname === '/About'
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
