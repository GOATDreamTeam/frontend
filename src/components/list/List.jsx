import React from 'react';
import ListItem from './ListItem';
import { useList } from '../../hooks/listHooks';
import { useParams } from 'react-router-dom';
import { updateTopSearchList } from '../../services/fetchCalls';

const List = () => {
  const { plantName } = useParams();
  const { plants } = useList(plantName);
  
  // onclick here? 
  const handleClick = (plant) => {
    updateTopSearchList(plant);
  };

  const plantElements = plants.map(plant => (
    <li key={plant.id}>
      <ListItem onClick={() => handleClick(plant)} {...plant} />
    </li>
  ));

  return (
    <ul>
      {plantElements}
    </ul>
  );
};

export default List;
