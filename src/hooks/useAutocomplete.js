import { useState, useEffect } from 'react';
import { fetchTopPlantSearch } from '../services/fetchCalls';
import { useHistory } from 'react-router-dom';

export const useAutocomplete = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const history = useHistory();

  //Whenever input changes
  const onChange = (e) => {
    const input = e.currentTarget.value;
    setSearchTerm(input);
    if(!searchTerm) {
      return setShowOptions(false);
    }
    fetchTopPlantSearch(searchTerm)
      .then(setFilteredOptions)
      .then(() => setShowOptions(true));
  };
  
  const onSearch = (text) => {
    setShowOptions(false);
    history.push(`/plants-list/${text}`);
    setSearchTerm('');
  };

  //Need an onSubmit for the form or button to render list of matches for list page
  const onSubmit = (e) => {
    e.preventDefault();
    setFilteredOptions([]);
    onSearch(searchTerm);
  };
  
  //On click for suggestions
  const onClick = (e) => {
    const newSearch = e.currentTarget.lastElementChild.childNodes[0].innerText;
    setSearchTerm(newSearch);
    onSearch(newSearch);
  };

  return {
    showOptions,
    searchTerm,
    filteredOptions,
    onClick,
    onSubmit,
    onChange
  };
};
