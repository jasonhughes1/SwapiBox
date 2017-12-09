import React from 'react';
import Header from './Header.js';
import { shallow } from 'enzyme';

let renderedHeader;
describe('Header tests', () => {
  beforeEach(() => {
    renderedHeader = shallow(
      <Header
      />);
  });

  it('should render the Header component', () => {
    expect(renderedHeader).toBeDefined();
  });

  it('should match snapshot()', () => {
    expect(renderedHeader).toMatchSnapshot();
  });

  it('should render a header', () => {
    const renderedHeader = shallow(<Header />);
    expect(renderedHeader.find('.header-container').length).toEqual(1);
  });
});
