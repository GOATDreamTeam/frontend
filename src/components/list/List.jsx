import React from 'react';
import ListItem from './ListItem';
import { useList } from '../../hooks/listHooks';

export default function List() {
  const { plants } = useList();
  
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
}
