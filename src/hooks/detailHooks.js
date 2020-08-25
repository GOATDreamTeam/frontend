import { useState, useEffect } from 'react';
import { fetchPlantById } from '../services/fetchCalls';

export const useDetails = (id) => {
  const [plantDetail, setDetails] = useState({});

  useEffect(() => {
    console.log(id);
    fetchPlantById(id)
      .then(setDetails);
  }, []);

  return {
    plantDetail
  };
};
