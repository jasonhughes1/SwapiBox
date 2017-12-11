import React, { Component } from 'react';
import './App.css';
import Controls from './../Controls/Controls.js';
import Scroll from './../Scroll/Scroll.js';
import Header from './../Header/Header.js';
import CardContainer from './../CardContainer/CardContainer';
import { getFilms, getPeople, getPlanets,
  getVehicles, fetchHomeworld, fetchSpecies,
  cleanData, fetchResidents } from '../../utility.js';
import GIF from './Loading_icon.gif';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      opening: Math.floor(Math.random() * (6 - 0 + 1)),
      currentDataToDisplay: 1,
      favClicked: false,
      favorites: []
    };
  }

  componentDidMount() {
    const films = getFilms();
    const people = getPeople();
    const planets = getPlanets();
    const vehicles = getVehicles();

    return Promise.all([films, people, planets, vehicles])
      .then(data => {
        const peopleData = fetchHomeworld(data[1].results)
          .then(data => fetchSpecies(data));
        const planetsData = fetchResidents(data[2].results);
        return Promise.all([films, peopleData, planetsData, vehicles])
          .then(data => {

            this.setState({data: cleanData(data)});
          });
      });
  }

  findIndexInFavArray(element) {
    return this === element.Name;
  }

setFavorite = (cardData) => {
  const { favorites } = this.state;

  const indexOfFavorite = favorites
    .findIndex(this.findIndexInFavArray, cardData.Name);

  let oldFavorites;

  if (indexOfFavorite < 0) {
    oldFavorites = [...favorites, cardData];
  } else {
    oldFavorites = favorites.slice();
    oldFavorites.splice(indexOfFavorite, 1);
  }

  this.setState({
    favorites: oldFavorites
  });
}

favClicked = () => {
  this.setState({ favClicked: true});
}

  changeCards = (num) => {
    this.setState({currentDataToDisplay: num});
  }

  cardSet() {
    const { data, currentDataToDisplay, favorites } = this.state;
    if (currentDataToDisplay === 4) {
      return favorites;
    }
    return data[currentDataToDisplay];
  }

  render() {
    if (this.state.data) {
      return (
        <div className='App'>
          <Header favFn={this.favClicked}
            numFav={this.state.favorites.length}
            changeCards={this.changeCards}
            num={4}
            favArray={this.state.favorites}
          />
          <div className='button-container'>

            <Controls
              buttonText='People'
              className={'button '}
              changeCards={this.changeCards}
              num={1}
              currentData={this.state.currentDataToDisplay}
            />
            <Controls
              buttonText='Planets'
              className={'button '}
              changeCards={this.changeCards}
              num={2}
              currentData={this.state.currentDataToDisplay}
            />
            <Controls
              buttonText='Vehicles'
              className={'button '}
              changeCards={this.changeCards}
              num={3}
              currentData={this.state.currentDataToDisplay}
            />
          </div>
          <Scroll data={this.state.data[0]}
            opening={this.state.opening}
          />
          <CardContainer
            cardType = {this.cardSet()}
            setFavorite={this.setFavorite}
            favArray={this.state.favorites}
          />
        </div>
      );
    } else {
      return (
        <div className='loading-gif'>
          <img src = {GIF}
            className='gif'
          />
          <h2 className='loading-text'>Content Loading, please wait</h2>
        </div>
      );
    }
  }
}
export default App;
