import React from 'react';
import Controls from './Controls.js';
import { shallow } from 'enzyme';


const mockChangeCards = jest.fn();
let renderedControls;

describe('Controls Tests', () => {
  beforeEach(() => {
    renderedControls = shallow(
      <Controls
        changeCards={mockChangeCards}
      />);
  });

  it('should render correctly', () => {
    expect(renderedControls).toBeDefined();
  });

  it('should render a button', () => {
    expect(renderedControls.find('button').length).toEqual(1);
  });


  it('should run the chooseCategory function when a button is clicked', () => {
    expect(mockChangeCards.mock.calls.length).toEqual(0);

    renderedControls.find('button').first().simulate('click');

    expect(mockChangeCards.mock.calls.length).toEqual(1);

    renderedControls.find('button').last().simulate('click');

    expect(mockChangeCards.mock.calls.length).toEqual(2);
  });

  it('should match snapshot', () => {
    expect(renderedControls).toMatchSnapshot();
  })
});
