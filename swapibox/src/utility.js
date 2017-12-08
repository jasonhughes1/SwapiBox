const getFilms = () => {
  return fetch('https://swapi.co/api/films/').then(data => data.json());
}

const getPeople = () => {
  return fetch('https://swapi.co/api/people/')
  .then(data => data.json());
}

const getPlanets = () => {
  return fetch('https://swapi.co/api/planets/')
      .then(data => data.json());
}

const getVehicles = () => {
  return fetch('https://swapi.co/api/vehicles/')
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
        return fetch(species.species)
        .then(res => res.json());
      });

      return Promise.all(speciesData).then( species => {
        return species.map((specie, currentIndex) => {
          return Object.assign(data[currentIndex], {Species: specie.name});
        });
      });
    }

  const fetchResidents = (data) => {
  const specificResidentsData = data.map( (planets) => {

    const specificResidents = planets.residents.map((link) => {
      return fetch(link)
        .then(res => res.json());
    });

    return Promise.all(specificResidents).then( people => {
      return Object.assign(planets, {Residents: people});
    });
  });

  return Promise.all(specificResidentsData);
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

        const mappedPlanets = data[2].map(obj => {
          return Object.assign({}, {Name: obj.name,
            Terrain: obj.terrain,
            Population: obj.population,
            Climate: obj.climate,
            Residents: obj.Residents});
        });
        const vehicles = data[3].results.map(obj => {
          return Object.assign({}, {Name: obj.name,
            Model: obj.model, Vehicle: obj.vehicle_class,
            Passengers: obj.passengers});
});

        return [filmOpenings, mappedPeople, mappedPlanets, vehicles];
}


module.exports = {
  getFilms,
  getPeople,
  fetchHomeworld,
  fetchSpecies,
  cleanData,
  getPlanets,
  fetchResidents,
  getVehicles

}
