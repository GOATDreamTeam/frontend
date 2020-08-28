import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from './AboutUs';
import AccessibilityProvider from '../../providers/AppProvider';

describe('AboutUs component', () => {
  it('renders AboutUs', () => {
    const wrapper = shallow(<AccessibilityProvider><AboutUs /></AccessibilityProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
