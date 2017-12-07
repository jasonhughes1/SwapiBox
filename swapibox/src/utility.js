const getFilms = () => {
  return fetch('https://swapi.co/api/films/').then(data => data.json());
}

const getPeople = () => {
  return fetch('https://swapi.co/api/people/')
  .then(data => data.json());
}

const fetchHomeworld = (data) => {
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

  const fetchSpecies = (data) => {
      const speciesData = data.map((species) => {
        console.log(species.species);
        return fetch(species.species)
        .then(res => res.json());
      });

      return Promise.all(speciesData).then( species => {
        return species.map((specie, currentIndex) => {
          return Object.assign(data[currentIndex], {Species: specie.name});
        });
      });
    }

  const cleanData = (data) => {
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


module.exports = {
  getFilms,
  getPeople,
  fetchHomeworld,
  fetchSpecies,
  cleanData
}
