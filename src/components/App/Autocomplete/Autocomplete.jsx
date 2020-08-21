//References code from the React Autocomplete 

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './autocomplete.css';

const Autocomplete = ({ list }) => {
  const [activeOption, setActiveOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  //On input change filter from the list
  const onChange = (e) => {
    const searchTerm = e.currentTarget.value;
    setActiveOption(0);
    setFilteredOptions(list.filter(option => option.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1));
    setShowOptions(true);
    setSearchTerm(searchTerm);
  };

  //When using arrows for 
  const onKeyDown = (e) => {
    //On enter
    if(e.keyCode === 13) {
      setActiveOption(0);
      setShowOptions(false);
      setSearchTerm(filteredOptions[activeOption]);
    //On up arrow
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
    console.log('button clicked!');
  };
  //On click for suggestions
  const onClick = (e) => {
    setFilteredOptions([]);
    setShowOptions(false);
    setSearchTerm(e.currentTarget.innerText);
  };

  //Conditional rendering for suggestions
  let optionList;
  if(showOptions && searchTerm) {
    if(filteredOptions.length) {
      optionList = (
        <ul className={styles.suggestions}>
          {filteredOptions.map(option => {
            return (
              <li key={option} onClick={onClick}>
                {option}
              </li>
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
          <input type="text" 
            className={styles.searchInput}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={searchTerm}/>
          <button type="submit" className={styles.searchSubmit}></button>
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