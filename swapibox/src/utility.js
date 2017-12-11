const getFilms = () => {
  return fetch('https://swapi.co/api/films/')
    .then(data => data.json());
};

const getPeople = () => {
  return fetch('https://swapi.co/api/people/')
    .then(data => data.json());
};

const getPlanets = () => {
  return fetch('https://swapi.co/api/planets/')
    .then(data => data.json());
};

const getVehicles = () => {
  return fetch('https://swapi.co/api/vehicles/')
    .then(data => data.json());
};

const fetchHomeworld = (data) => {
  const homeworldData = data.map((world) => {
    return fetch(world.homeworld)
      .then(res => res.json());
  });

  return Promise.all(homeworldData).then( homeworlds => {
    return homeworlds.map((homeworld, currentDataToDisplay) => {
      return Object.assign(data[currentDataToDisplay],
        {Homeworld: homeworld.name,
          Population: homeworld.population});
    });
  });
};

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
};

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
};


const cleanData = (data) => {
  const filmOpenings = data[0].results.map(object => {
    return Object.assign({},
      {Opening: object.opening_crawl,
        Title: object.title,
        Release: object.release_date});
  });

  const mappedPeople = data[1].map(object => {
    return Object.assign({},
      {Name: object.name,
        Homeworld: object.Homeworld,
        Species: object.Species,
        Population: object.Population});
  });

  const mappedPlanets = data[2].map(object => {
    return Object.assign({},
      {Name: object.name,
        Terrain: object.terrain,
        Population: object.population,
        Climate: object.climate,
        Residents: object.Residents});
  });
  const vehicles = data[3].results.map(object => {
    return Object.assign({},
      {Name: object.name,
        Model: object.model,
        Vehicle: object.vehicle_class,
        Passengers: object.passengers});
  });

  return [filmOpenings, mappedPeople, mappedPlanets, vehicles];
};


module.exports = {
  getFilms,
  getPeople,
  fetchHomeworld,
  fetchSpecies,
  cleanData,
  getPlanets,
  fetchResidents,
  getVehicles
};
