import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import AccessibleImage from '../photos/AccessibleImage';
import { placeholder } from '../../hooks/globalStyles';

const ListItem = (
  
  { onClick, 
    image_url, 
    common_name, 
    scientific_name, 
    id,
    imageClass }) => (
  <>
    <div className={imageClass.text}>
      <Link to={`/plant-detail/${id}`} >
        <figure onClick={onClick} id={id}>
    
          <LazyLoad className={imageClass.row}>
            <div>
              {image_url 
                ? 
                <AccessibleImage className={imageClass.img} src={image_url} />
                : 
                <AccessibleImage className={imageClass.img} src={placeholder} />}
            </div>
          </LazyLoad>

        </figure>
    
        <figcaption className={imageClass.row}>
          {common_name} ~<br/> {scientific_name} </figcaption>
      </Link>
    </div>
    
  </>
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
