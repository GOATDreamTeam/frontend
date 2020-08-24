import React from 'react';
// import PropTypes from 'prop-types';
import Autocomplete from '../Autocomplete/Autocomplete';
import Toggle from '../toggle/Toggle';

const Header = () => {

  return (
    <div>
      <Autocomplete list={['Hydrangea', 'Daisy', 'Cedar', 'Fern Spikey', 'Fern squishy']}/>

      <Toggle /> 

    </div>
  );
};

// Header.propTypes = {
  
// };

export default Header;

