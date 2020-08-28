import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import SearchPreview from '../../searchPreview/SearchPreview';
import { useAccessibility } from '../../../hooks/appContext';
import { useAutocomplete } from '../../../hooks/useAutocomplete';

const useSearchStyles = createUseStyles({
  input: {
    padding: '0.2rem',
    fontSize: '16px'
  },

  button: {
    padding: '0.2rem',
    fontSize: '16px'
  },

  ul: {
    listStyle: 'none'
  }

});

const Autocomplete = () => {
  const { theme } = useAccessibility();
  const classes = useSearchStyles(theme);

  const {
    showOptions,
    searchTerm,
    filteredOptions,
    onClick,
    onSubmit,
    onChange,
    onKeyDown
  } = useAutocomplete();

  //Conditional rendering for suggestions
  let optionList;
  if(showOptions && searchTerm) {
    if(filteredOptions.length) {
      optionList = (
        <ul className={classes.ul}>
          {filteredOptions.map(option => {
            return (
              <SearchPreview key={option.scientific_name} option={option} onClick={onClick}/>
            );
          })}
        </ul>
      );
    } else {
      optionList = (
        <>
          <p>No Sugestions At This Time</p>
        </>
      );
    }
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div className={classes.searchBar}>
            <input 
              className={classes.input} 
              type="text"
              placeholder="Search Plants..."
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={searchTerm}
            />
            <button className={classes.button}>
              <i style={{ fontSize: '14px' }}className="material-icons">search</i>
            </button>
          </div>
        </form>
      </div>
      {optionList}
    </>
  );
};

Autocomplete.propTypes = {
  list: PropTypes.instanceOf(Array)
};

export default Autocomplete;
