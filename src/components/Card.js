import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { data, onClick } = this.props;
    const { id, title, cover } = data;

    return (
      <div className="card" onClick={() => onClick(id)}>
        <img src={cover} alt={title} />
        <div class='overlay'>
        <h2>{title}</h2>
        </div>
      </div>
    );
  }
}

export default Card;
