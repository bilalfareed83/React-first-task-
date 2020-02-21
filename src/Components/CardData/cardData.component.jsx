import React, { Component } from 'react';
import Card from '../Card/card.component';

class CardData extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div>
        {this.props.user.map((item, i) => {
          return (
            this.props.user.name,
            (
              <Card
                imageUrl={this.props.imageUrl}
                decription={this.props.decription}
              />
            )
          );
        })}
      </div>
    );
  }
}

export default CardData;
