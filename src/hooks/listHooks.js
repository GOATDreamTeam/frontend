import { useState, useEffect } from 'react';
import { fetchPlantSearch } from '../services/fetchCalls';

export const useList = (plantName) => {
  const [plants, setPlants] = useState([]);
  // const [page, setPage] = useState(1);

  // anytime a user types, it updates this function, so not having the hardcoding cucumber or 1 on the bottom 
  // 
  useEffect(() => {
    fetchPlantSearch(plantName, '1')
      .then(setPlants);
  }, [plantName]);

  return {
    plants
  };
};

// work on the submit button 
// then on the autocomplete feature 
// need to make a useeffect that calls upon the search input that the user types in 
// the above useeffect uses a fetch call according to the inputed plant above
