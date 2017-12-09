import React from 'react';
import Header from './Header.js';
import { shallow } from 'enzyme';


describe('Header tests', () => {


  it('should match snapshot()', () => {
    let renderedApp = shallow(<Header />);

    expect(renderedApp).toMatchSnapshot();
  });

  describe('Header', () => {
  it('should render a header', () => {
    const renderedHeader = shallow(<Header />);
    expect(renderedHeader.find('.header-container').length).toEqual(1);
  });
});
});
