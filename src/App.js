import React from 'react';
import './App.css';
// import Card from './Components/Card/card.component';
import CardData from './Components/CardData/cardData.component';

const App = () => {
  const user = [
    {
      name: 'Bilal',
      imageUrl: 'https://dummyimage.com/skyscraper/f0f/f',
      decription: 'Type what you want'
    },
    {
      name: 'Tehseen',
      imageUrl: 'https://dummyimage.com/skyscraper/f0f/f',
      decription: 'Type what you want'
    },
    {
      name: 'Sajjad',
      imageUrl: 'https://dummyimage.com/skyscraper/f0f/f',
      decription: 'Type what you want'
    }
  ];
  return (
    <div>
      <CardData user={user} />
    </div>
  );
};

export default App;
