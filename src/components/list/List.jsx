import React from 'react';
import ListItem from './ListItem';
import { useList } from '../../hooks/listHooks';
import { useParams } from 'react-router-dom';
import { updateTopSearchList } from '../../services/fetchCalls';
import { useAccessibility } from '../../hooks/appContext';
import { useListStyles } from './listPageStyle';
import Footer from '../footer/Footer';
import LoadingScreen from '../loading/LoadingScreen';

const List = () => {

  const { theme } = useAccessibility();
  const classes = useListStyles(theme);

  const { plantName } = useParams();
  const { plants, Pagination } = useList(plantName);
  
  // onclick here? 
  const handleClick = (plant) => {
    updateTopSearchList(plant);
  };

  const plantElements = plants.map(plant => (
    <li className={classes.column} key={plant.id}>
      <ListItem imageClass={classes} onClick={() => handleClick(plant)} {...plant} />
    </li>
  )); 

  return (
    <>
      {console.log(plantElements)}
      <Pagination className={classes.paging} />
      { plantElements.length > 0 ?
        <ul className={classes.row}>
          {plantElements}
        </ul> 
        : <LoadingScreen/> }
      <Footer />
    </>
  );
};

export default List;
