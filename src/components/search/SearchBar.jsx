import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ input, onChange, onSubmit }) => (
  
  
  <form onSubmit={onSubmit}>
    <input type="text" placeholder="Enter Your Plant Name Here" value={input} onChange={onChange} />     
    <button type="submit"></button>
  </form>

);

SearchBar.propTypes = {
  input: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
