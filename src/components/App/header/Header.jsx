import React from 'react';
// import PropTypes from 'prop-types';
import Autocomplete from '../Autocomplete/Autocomplete';
import Toggle from '../toggle/Toggle';

const Header = () => {

  return (
    <div>
      <Autocomplete list={[{ common_name: 'Hydrangea', scientific_name: 'latin latin 0', image_url: 'https://bs.floristic.org/image/o/7210dfc0c2a48bdde194bef37c7b7956974bc1b7' },
        { common_name: 'Daisy', scientific_name: 'latin latin 1', image_url: 'https://bs.floristic.org/image/o/eb049be6b9186aed76ada3c8d3cd54d762842aa8' }, 
        { common_name: 'Cedar', scientific_name: 'latin latin 2', image_url: 'https://bs.floristic.org/image/o/eb049be6b9186aed76ada3c8d3cd54d762842aa8' }, 
        { common_name: 'Fern Spikey', scientific_name: 'latin latin 3', image_url: 'https://bs.floristic.org/image/o/eb049be6b9186aed76ada3c8d3cd54d762842aa8' }, 
        { common_name:'Fern squishy', scientific_name: 'latin latin 4', image_url: 'https://bs.floristic.org/image/o/eb049be6b9186aed76ada3c8d3cd54d762842aa8' }]}/>
      <Toggle /> 

    </div>
  );
};

// Header.propTypes = {
  
// };

export default Header;

