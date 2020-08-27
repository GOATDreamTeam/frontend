import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import AccessibleImage from '../photos/accessibleImage';


const ListItem = ({ 
  onClick, 
  image_url, 
  common_name, 
  scientific_name, 
  id,
  imageClass }) => (
    

  <Link to={`/plant-detail/${id}`} >
    <figure onClick={onClick} id={id}>
      <LazyLoad className={imageClass.row}>
        <AccessibleImage className={imageClass.img} src={image_url} />
      </LazyLoad>
      
      <figcaption className={imageClass.row}>
        {common_name} <br/> {scientific_name} </figcaption>
    </figure>
  </Link>
);

ListItem.propTypes = {
  image_url: PropTypes.string.isRequired,
  common_name: PropTypes.string.isRequired,
  scientific_name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired, 
  onClick: PropTypes.func.isRequired,
  imageClass: PropTypes.object.isRequired 
};

export default ListItem;
