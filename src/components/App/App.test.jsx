import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AccessibilityProvider from '../../providers/AppProvider';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<AccessibilityProvider><App /></AccessibilityProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
