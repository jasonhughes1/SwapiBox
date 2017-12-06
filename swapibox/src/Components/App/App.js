import React, { Component } from 'react';
import './App.css';
import Controls from './../Controls/Controls.js';
import Scroll from './../Scroll/Scroll.js';
import Header from './../Header/Header.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentView: 'People',
      currentDataArray: null,
      data: null,
      opening: Math.floor(Math.random() * (6 - 0 + 1)),
      currentIndex: 1
    }
  }

  componentDidMount() {
    const films = fetch('https://swapi.co/api/films/')
    .then(data => data.json());
    const people = fetch('https://swapi.co/api/people/')
    .then(data => data.json());

    return Promise.all([films, people])
    .then(data => {
      const people = this.fetchHomeworld(data[1].results)
      .then(data => this.fetchSpecies(data));
      return Promise.all([films, people])
      .then(data => {
        this.setState({data: this.cleanData(data)})
      })
    });
  }

  fetchHomeworld(data) {
    const homeworldData = data.map((world) => {
      return fetch(world.homeworld)
      .then(res => res.json());
    });

    return Promise.all(homeworldData).then( homeworlds => {
      return homeworlds.map((homeworld, currentIndex) => {
        return Object.assign(data[currentIndex],
          {Homeworld: homeworld.name,
            Population: homeworld.population});
          });
        });
      }

    fetchSpecies(data) {
        const speciesData = data.map((species) => {
          return fetch(species.species)
          .then(res => res.json());
        });

        return Promise.all(speciesData).then( species => {
          return species.map((specie, currentIndex) => {
            return Object.assign(data[currentIndex], {Species: specie.name});
          });
        });
      }


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

        changeCategory = (query) => {
          if (query === 'People') {
              this.setState({
              currentDataArray: this.state.peopleArray,
              currentView: 'People'});
              }
            }

          render() {
            if (this.state.data) {
              return (
                <div className='App'>
                  <Header />
                  <h1>APP HERE</h1>
                  <Controls
                       changeCategory={this.changeCategory}
                          currentView={this.state.currentView}

                  />
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
