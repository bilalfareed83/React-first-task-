import React, { Component } from 'react';
// import Card from '../Card/card.component';

class CardData extends Component {
  render() {
    console.log(this.props.user);
    return <div>{this.props.user.map(item => item.name)}</div>;
  }
}

export default CardData;
