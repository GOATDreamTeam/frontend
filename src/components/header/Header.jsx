import React from 'react';
// import PropTypes from 'prop-types';
import Autocomplete from '../header/Autocomplete/Autocomplete';
import Toggle from '../toggle/Toggle';

const Header = () => {

  return (
    <div >
    
      <Autocomplete />
      {/* next goal: ask backend for the list above */}
      {/*  */}
      <Toggle /> 

    </div>
  );
};

// Header.propTypes = {
  
// };

export default Header;

