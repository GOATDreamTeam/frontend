import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import SearchPreview from '../../searchPreview/SearchPreview';
import { useHistory } from 'react-router-dom';
import { fetchTopPlantSearch } from '../../../services/fetchCalls';
import { useAccessibility } from '../../../hooks/appContext';

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
  
  const [activeOption, setActiveOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // lets us push to a new url
  const history = useHistory();

  useEffect(() => { 
    if(!searchTerm) return setShowOptions(false);
    fetchTopPlantSearch(searchTerm)
      .then(setFilteredOptions)
      .then(() => setShowOptions(true));
  }, [searchTerm]);

  //On input change filter from the list
  const onChange = (e) => {
    const searchTerm = e.currentTarget.value;
    setActiveOption(0);
    setSearchTerm(searchTerm);
  };

  //When using arrows to navigate through suggestions
  const onKeyDown = (e) => {
    //On enter
    if(e.keyCode === 13) {
      setActiveOption(0);
      setShowOptions(false);
      history.push(`/plants-list/${searchTerm}`);

    //On up
    } else if(e.keycode === 38) {
      if(activeOption === 0) {
        return;
      }
      setActiveOption(activeOption - 1);
    //On down arrow
    } else if(e.keycode === 40) {
      if(activeOption - 1 === filteredOptions.length) {
        return;
      }
      setActiveOption(activeOption + 1);
    }
  };

  //Need an onSubmit for the form or button to render list of matches for list page
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/plants-list/${searchTerm}`);
  };

  // INSTEAD OF SETTING CURRENT TARGET SHOULD REDIRECT TO LIST PAGE
  //On click for suggestions
  const onClick = () => {
    setFilteredOptions([]);
    setShowOptions(false);
    history.push(`/plants-list/${searchTerm}`);
  };

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
