import React, { Component } from 'react';
import './App.css';
import Button from './../Button/Button.js';
import Scroll from './../Scroll/Scroll.js';
import Header from './../Header/Header.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      scroll: []
    }
  }


   componentDidMount() {
    fetch('https://swapi.co/api/films/')
       .then(result => result.json())
       .then(dataObj => dataObj.results)
       .then(resultsArray => {
         console.log(resultsArray);
           const scrollData = resultsArray.map(film => {
           const title = film.title;
           const crawl = film.opening_crawl;
           const releaseDate = film.release_date;
           return [title, crawl, releaseDate];
         });
         this.setState({ scroll: scrollData });
       })
       .catch(err => console.log(err));
   }




  render() {
    return (
      <div className="App">
        <Header />
        <h1>APP HERE</h1>
        <Button />
        <Scroll scrollData={this.state.scroll}/>
      </div>
    );
  }
}

export default App;
