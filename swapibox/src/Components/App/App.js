import React, { Component } from 'react';
import './App.css';
import Button from './../Button/Button.js';
import Scroll from './../Scroll/Scroll.js';
import Header from './../Header/Header.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      opening: Math.floor(Math.random() * (6 - 0 + 1))
    }
  }

  componentDidMount() {
    const films = fetch('https://swapi.co/api/films/')
      .then(data => data.json());

    return Promise.all([films])
      .then(data => {
      this.setState({data: this.cleanFilmData(data)});
    })
  }

  cleanFilmData(data) {
    const filmOpenings = data[0].results.map(obj => {
      return Object.assign({}, {Opening: obj.opening_crawl,
        Title: obj.title, Release: obj.release_date});
      });

      return [filmOpenings]
    }

    render() {
      if (this.state.data) {
        return (
          <div className="App">
            <Header />
            <h1>APP HERE</h1>
            <Button />
            <Scroll data={this.state.data[0]}
              opening={this.state.opening}
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
