import React from 'react';
import { mount } from 'enzyme';
import PhotoCard from './PhotoCard';
import AccessibilityProvider from '../../providers/AppProvider';


describe('Photocard component', () =>{

  const photo = {
    image_url: 'photoURL',
    copyright: 'made 2020'
  };
  let wrapper;
  beforeEach(() => {

    wrapper = mount(
      <AccessibilityProvider>
        <PhotoCard photo={photo}/>
      </AccessibilityProvider>);
          
  });
  
  it('has one figure', () => { 
    expect(wrapper.find('figure')).toHaveLength(1);
  });

}
);
