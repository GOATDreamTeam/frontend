import React from 'react';
import ListItem from './ListItem';
import { useList } from '../../hooks/listHooks';

const List = () => {
  const { plants } = useList();

  console.log(plants);
  
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
