//References code from the React Autocomplete article from Eden Ella

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import styles from './autocomplete.css';
import SearchPreview from '../../searchPreview/SearchPreview';
import { useHistory } from 'react-router-dom';
import { fetchTopPlantSearch } from '../../../services/fetchCalls';
import { useSearchStyling } from '../../../hooks/searchStylingHooks';

const Autocomplete = () => {
  const [activeOption, setActiveOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // lets us push to a new url
  const history = useHistory();
  const styles = useSearchStyling();

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
        <ul className={styles.suggestions}>
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
          <p className={styles.noSuggestions}>No suggestions</p>
        </>
      );
    }
  }

  return (
    <>
      <div className={styles.search}>
        <form onSubmit={onSubmit}>
          <div>
            <input type="text"
              placeholder="Search Plants..."
              className={styles.searchInput}
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={searchTerm}/>
            <button type="submit" className={styles.searchSubmit}></button>
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
