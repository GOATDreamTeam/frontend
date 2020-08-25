import { useState, useEffect } from 'react';
import { fetchPlantSearch } from '../services/fetchCalls';

export const useList = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchPlantSearch('cucumber', '1')
      .then(setPlants);
  }, []);

  return {
    plants
  };
};
