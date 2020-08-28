import { useState, useEffect } from 'react';
import { fetchPlantSearch } from '../services/fetchCalls';
import { usePagination } from './pagination';

export const useList = (plantName) => {
  const [plants, setPlants] = useState([]);
  const { page, setTotalPages, Pagination } = usePagination();

  useEffect(() => {
    fetchPlantSearch(plantName, page)
      .then(({ data, totalPages }) => {
        setPlants(data);
        setTotalPages(totalPages);
      });
  }, [plantName, page]);

  return {
    plants,
    Pagination
  };
};
