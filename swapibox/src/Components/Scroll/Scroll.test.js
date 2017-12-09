import React from 'react';
import Scroll from './Scroll.js';
import { shallow } from 'enzyme';


let renderedScroll;

let mockData = [
  {
    Opening: "It is a period of civil was",
    Title: "A New Hope",
    Release: "1977-05-25"
  }, {
    Opening: "It is a period of civil was",
    Title: "A New Hope",
    Release: "1977-05-25"
  }, {
    Opening: "It is a period of civil was",
    Title: "A New Hope",
    Release: "1977-05-25"
  }, {
    Opening: "It is a period of civil was",
    Title: "A New Hope",
    Release: "1977-05-25"
  }, {
    Opening: "It is a period of civil was",
    Title: "A New Hope",
    Release: "1977-05-25"
  }, {
  }, {
    Opening: "It is a period of civil was",
    Title: "A New Hope",
    Release: "1977-05-25"
  }, {
    Opening: "It is a period of civil was",
    Title: "A New Hope",
    Release: "1977-05-25"
  }];

let mockOpening = 1;

describe('Scroll Tests', () => {
  beforeEach(() => {
    renderedScroll = shallow(
      <Scroll
        data={mockData}
        opening={mockOpening}
      />);
  });

  it('should render correctly', () => {
    expect(renderedScroll).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(renderedScroll).toMatchSnapshot();
  });
});
