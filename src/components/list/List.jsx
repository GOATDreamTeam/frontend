import React from 'react';
import ListItem from './ListItem';
import { useList } from '../../hooks/listHooks';
import { useParams } from 'react-router-dom';

const List = () => {
  const { plantName } = useParams();
  const { plants } = useList(plantName);
  
  const plantElements = plants.map(plant => (
    <li key={plant.id}>
      <ListItem {...plant} />
    </li>
  ));

  return (
    <ul>
      {plantElements}
    </ul>
  );
};

export default List;
