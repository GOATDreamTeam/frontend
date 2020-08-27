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
    scientific_name, leaf_images, bark_images } = plantDetail;
  console.log('Im in the Detail Page', image_url);
  
  return (
    <>
      <div>
        <h1>{common_name} | {scientific_name}</h1>
        <img src={image_url} alt={common_name} />
        
        <ul>
          <h3>Taxonomy </h3>
          <li>Family: {family}</li>
          <li>Genus: {genus}</li>
          <h3>Plant Information: </h3>
          <p>{edible ? 'Edible' : 'inedible'}</p>
        </ul>
      </div>

      <div>
        <Gallery photos={leaf_images} />
        <Gallery photos={flower_images} /> 
        <Gallery photos={fruit_images} />
        <Gallery photos={bark_images} />
        <Gallery photos={habit_images} />
      </div>
    </>
  );
};

DetailPage.propTypes = {
  match: PropTypes.object.isRequired
  
};

export default DetailPage;
