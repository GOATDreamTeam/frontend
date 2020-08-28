import React from 'react';
import { mount } from 'enzyme';
import SearchPreview from './SearchPreview';
import AccessibilityProvider from '../../providers/AppProvider';

describe('Search preview', () => {
  const option = {
    image_url: 'this is a photourl',
    common_name: 'very common plant',
    scientific_name: 'SUPER FANCY '
  };
  let wrapper;
  let handleClick;
  beforeEach(() => {
    handleClick = jest.fn();
    wrapper = mount(<AccessibilityProvider><SearchPreview option={option} onClick={handleClick}/></AccessibilityProvider>);
  });

  it('has two spans', () => {
    expect(wrapper.find('span')).toHaveLength(2);
  });

  it('it has a click method', () => {
    wrapper.find('li').simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

});
