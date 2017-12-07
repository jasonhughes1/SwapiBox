import React, { Component } from 'react';
import './App.css';
import Controls from './../Controls/Controls.js';
import Scroll from './../Scroll/Scroll.js';
import Header from './../Header/Header.js';
import CardContainer from './../CardContainer/CardContainer';
import { getFilms, getPeople, fetchHomeworld, fetchSpecies, cleanData } from '../../utility.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      films: null,
      people: null,
      opening: Math.floor(Math.random() * (6 - 0 + 1)),
      currentIndex: 1,
      openingCrawl: '',
    }
  }
// make an api utility
  // test the utility
  // make your app component readable
  // use async await
    // look into putting the logic into functions so that it's easier to follow your control flow
// probs move the opening random number generator into a function
// maybe create a function that just populates your crawl.
  // getFilms = () => {
  //   return fetch('https://swapi.co/api/films/').then(data => data.json());
  // }

    componentDidMount() {
      const films = getFilms()
      const people = getPeople()

      return Promise.all([films, people])
      .then(data => {
        const people = fetchHomeworld(data[1].results)
        .then(data => fetchSpecies(data));
        return Promise.all([films, people])
        .then(data => {
          this.setState({data: cleanData(data)})
        })
      });
    }

  // generateCrawl() {
  //   let random = Math.floor(Math.random() * (6 - 0 + 1))
  //   // generate a random number
  //   // grab films array map through it to get an array of crawls
  //   // then pick one
  //   // this.setState({openingCrawl : })
  // }

  cleanData(data) {
    const filmOpenings = data[0].results.map(obj => {
      return Object.assign({}, {Opening: obj.opening_crawl,
        Title: obj.title, Release: obj.release_date});
      });

      const mappedPeople = data[1].map(obj => {
        return Object.assign({}, {Name: obj.name,
          Homeworld: obj.Homeworld,
          Species: obj.Species,
          Population: obj.Population});
        });
        return [filmOpenings, mappedPeople]
  }

  changeCards = (num) => {
    this.setState({currentIndex: num})
  }

  cardSet() {
    const { data, currentIndex } = this.state;
    return data[currentIndex];
  }

  render() {
    if (this.state.data) {
      return (
        <div className='App'>
          <Header />
          <h1>APP HERE</h1>
          <Controls
            buttonText='People'
            changeCards={this.changeCards}
            num={1}
          />
          <Scroll data={this.state.data[0]}
            opening={this.state.opening}
          />
          <CardContainer
            cardType = {this.cardSet()}
          />
        </div>
      );
    } else {
      return (
        <div>WAIT SON</div>
      )
    }
  }
}
export default App;
