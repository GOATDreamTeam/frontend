import React from 'react';
import { shallow } from 'enzyme';
import PhotoCard from './PhotoCard';

describe('Photocard component', () =>{
  const photo = {
    image_url: 'photoURL',
    copyright: 'made 2020'
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PhotoCard photo={photo}/>);
  });
  
  it('has one figure', () => { 
    expect(wrapper.find('figure')).toHaveLength(1);
  });

  it('has one img', () => { 
    expect(wrapper.find('img')).toHaveLength(1);
  });

}
);
