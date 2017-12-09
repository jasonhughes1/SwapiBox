import React from 'react';
import Card from './Card.js';
import { shallow } from 'enzyme';


const mockSetFavorite = jest.fn();
let renderedCard;

describe('Card', () => {
  beforeEach(() => {
    renderedCard = shallow(
      <Card
        cardData={{card: 1}}
        setFavorite={mockSetFavorite}
      />);
  });

  it('should render corrrectly', () => {
    expect(renderedCard).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(renderedCard).toMatchSnapshot();
  });
});
