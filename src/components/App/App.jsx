import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import { fetchPlantSearch } from './services/fetchCalls';

export default function App() {


  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchPlantSearch('cucumber')
      .then(setPlants);
  }, []);
 
  const plantElements = plants.map(plant => (
    <li key={plant.common_name}>
      <p>{plant.common_name}</p>
    </li>
  ));

  return <>
    <Header/>

    <ul>
      {plantElements}
    </ul>
  </>;
}
  
