import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

it('should render App component', () => {
  const wrapper = shallow(<App />);
  const h1 = wrapper.find('h1');
  const result = h1.text();

  expect(result).toBe('Reviews');
});
