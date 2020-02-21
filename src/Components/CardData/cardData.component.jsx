import React, { Component } from 'react';
import Card from '../Card/card.component';

class CardData extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        {this.props.user.map((item, i) => {
          return <Card key={i}></Card>;
        })}
      </div>
    );
  }
}

export default CardData;
