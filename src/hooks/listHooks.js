import { useState, useEffect } from 'react';
import { fetchPlantSearch } from '../services/fetchCalls';

export const useList = (plantName) => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchPlantSearch(plantName, '1')
      .then(setPlants);
  }, [plantName]);

  return {
    plants
  };
};
