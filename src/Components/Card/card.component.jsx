import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={this.props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{this.props.decription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
