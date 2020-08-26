import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

describe('Gallery component', () =>{
  
  it('has required photos', () => {
    const photos = [{ common_name: 'first photo', id: '123' }, { common_name: 'second photo', id:'345' }];
    const wrapper = shallow(<Gallery photos={photos}/>);
    expect(wrapper.find('PhotoCard')).toHaveLength(2);
  });

}
);
