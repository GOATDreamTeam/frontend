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
    scientific_name, leaf_images, bark_images, vegetable } = plantDetail;
  console.log('Im in the Detail Page', image_url);
  
  return (
    <div>
      <h1>Common Name: {common_name}</h1>
      <h2>Is it edible? {edible ? 'edible' : 'not edible'}</h2>
      <h2>Family: {family}</h2>
      <h2>Genus: {genus}</h2>
      <figure>
        <img src={image_url} alt={common_name} />
        <figcaption>{common_name}</figcaption>
      </figure>
      <h2>Scientific Name:{scientific_name}</h2>
      <h2>Is it a veggy? {vegetable ? 'eat it' : 'don\'t eat it'}</h2>
      <Gallery photos={leaf_images} />
      <Gallery photos={flower_images} /> 
      <Gallery photos={fruit_images} />
      <Gallery photos={bark_images} />
      <Gallery photos={habit_images} />
    </div>
  );
};

DetailPage.propTypes = {
  match: PropTypes.object.isRequired
  
};

export default DetailPage;
