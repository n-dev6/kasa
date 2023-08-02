import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Card extends Component {
  render() {
    const { data } = this.props
    const { id, title, cover } = data

    return (
      <Link to={`/Logement/${id}`}>
        <div className="card">
          <img src={cover} alt={title} />
          <div className="overlay">
            <h2>{title}</h2>
          </div>
        </div>
      </Link>
    )
  }
}

export default Card
