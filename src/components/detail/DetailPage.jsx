import React from 'react';
import PropTypes from 'prop-types';
import { useDetails } from '../../hooks/detailHooks.js';
import Gallery from '../photos/Gallery.jsx';


const DetailPage = ({ match }) => {
  const id = match.params.id;
  const { plantDetail } = useDetails(id);
  if(!plantDetail) return <h1>loading</h1>;
  const { common_name,
    edible, family, genus,
    flower_images, fruit_images,
    habit_images, image_url,
    scientific_name, vegetable } = plantDetail;
  console.log('Im in the Detail Page', image_url);
  
  return (
    <div>
      
      <h1>{common_name}</h1>
      <h2>{edible ? 'edible' : 'not edible'}</h2>
      <h2>{family}</h2>
      <h2>{genus}</h2>
      <figure>
        <img src={image_url} alt={common_name} />
        <figcaption>{common_name}</figcaption>
      </figure>
      <h2>{scientific_name}</h2>
      <h2>{vegetable ? 'vegetable' : 'not vegetable'}</h2>
      <Gallery photos={flower_images} /> 
    </div>
  );
};

DetailPage.propTypes = {
  match: PropTypes.object.isRequired
  
};

export default DetailPage;
