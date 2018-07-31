import React, { Component } from 'react';
import '../styles/App.css';
import card from '../CardData';
import Card from './Card';
import avatars from '../person.jpg';
import picture from '../pictureBig.jpg';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Card
          cardtitle = {card.headline}
          avatar = {avatars}
          name = {card.name}
          cardimageURL={picture}
          message={card.message}
        />
      </div>
    );
  }
}

export default App;
