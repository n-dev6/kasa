import React, { Component } from 'react'
import logoFooter from '../assets/logoFooter.png'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img src={logoFooter} alt="logo" />
        <p style={{ color: 'white', fontSize: '20px' }}>
          © 2020 Kasa. All rights reserved
        </p>
      </div>
    )
  }
}

export default Footer
