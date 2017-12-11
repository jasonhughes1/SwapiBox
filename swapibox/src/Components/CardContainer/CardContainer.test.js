import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

let mockCardType = [{
  Name: "Luke Skywalker",
  Homeworld: "Tatooine",
  Species: "Human",
  Population: "200000"
}, {
  Name: "Luke Skywalker",
  Homeworld: "Tatooine",
  Species: "Human",
  Population: "200000"
}, {
  Name: "Luke Skywalker",
  Homeworld: "Tatooine",
  Species: "Human",
  Population: "200000"
}, {
  Name: "Luke Skywalker",
  Homeworld: "Tatooine",
  Species: "Human",
  Population: "200000"
}, {
  Name: "Luke Skywalker",
  Homeworld: "Tatooine",
  Species: "Human",
  Population: "200000"
}, {
  Name: "Luke Skywalker",
  Homeworld: "Tatooine",
  Species: "Human",
  Population: "200000"
}, {
  Name: "Luke Skywalker",
  Homeworld: "Tatooine",
  Species: "Human",
  Population: "200000"
}, {
  Name: "Luke Skywalker",
  Homeworld: "Tatooine",
  Species: "Human",
  Population: "200000"
}, {
  Name: "Luke Skywalker",
  Homeworld: "Tatooine",
  Species: "Human",
  Population: "200000"
}, {
  Name: "Luke Skywalker",
  Homeworld: "Tatooine",
  Species: "Human",
  Population: "200000"
}];

let mockFavArray = [{
  Homeworld: "Tatooine",
  Name: "C-3PO",
  Population: "200000",
  Species: "Droid"
}];

let mockSetFavorite = jest.fn();
let renderedCardContainer;

describe('CardContainer Tests', () => {
  renderedCardContainer = shallow(
    <CardContainer
      cardType={mockCardType}
      setFavorite={mockSetFavorite}
      mockFavArray={mockFavArray}
    />
  );

  it('should render correctly', () => {
    expect(renderedCardContainer).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot();
  });
});
