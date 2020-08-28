import { useState, useEffect } from 'react';
import { fetchTopPlantSearch } from '../services/fetchCalls';
import { useHistory } from 'react-router-dom';

export const useAutocomplete = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeOption, setActiveOption] = useState(-1);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const history = useHistory();

  // if it's a newlySearched
  //change newlySearch to false and change url and setShowOptions to false

  //else if there is no search term setShowOptions false

  //else fetch the stuff

  useEffect(() => {
    if(!searchTerm) return setShowOptions(false);
    if(showOptions) {
      fetchTopPlantSearch(searchTerm)
        .then(setFilteredOptions)
        .then(() => setShowOptions(true));
    }
  }, [searchTerm]);

  //Whenever input changes
  const onChange = (e) => {
    const searchTerm = e.currentTarget.value;
    setActiveOption(-1);
    setSearchTerm(searchTerm);
    setShowOptions(true);
  };

  //When using arrows to navigate through suggestions
  const onKeyDown = (e) => {
    //On enter
    if(e.keyCode === 13) {

      // use arrows to navigate options
      if(activeOption > -1) {
        setSearchTerm(filteredOptions[activeOption + 1].common_name);
      }

      setShowOptions(false);
      //want to trigger a history push in useEffect
      history.push(`/plants-list/${searchTerm}`);  
      
      //On up
    } else if(e.keycode === 38) {
      if(activeOption === -1) {
        return;
      }
      setActiveOption(activeOption - 1);
      //On down arrow
    } else if(e.keycode === 40) {
      if(activeOption + 1 === filteredOptions.length) {
        return;
      }
      setActiveOption(activeOption + 1);
    }
  };

  //Need an onSubmit for the form or button to render list of matches for list page
  const onSubmit = (e) => {
    e.preventDefault();

    setShowOptions(false);
    //want to trigger a history push in useEffect
    history.push(`/plants-list/${searchTerm}`);
  };
  
  //On click for suggestions
  const onClick = (e) => {
    setSearchTerm(e.currentTarget.lastElementChild.childNodes[0].innerText);
    
    setShowOptions(false);
    //want to trigger a history push in useEffect
    history.push(`/plants-list/${searchTerm}`);
  };

  return {
    showOptions,
    searchTerm,
    filteredOptions,
    onClick,
    onSubmit,
    onChange,
    onKeyDown
  };
};
