import React from 'react';
import { shallow } from 'enzyme';
import SearchPreview from './SearchPreview';

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
    wrapper = shallow(<SearchPreview option={option} onClick={handleClick}/>);
  });

  it('has two spans', () => {
    expect(wrapper.find('span')).toHaveLength(2);
  });

  it('it has a click method', () => {
    wrapper.find('li').simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

});
