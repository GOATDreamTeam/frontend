import React from 'react';
import PropTypes from 'prop-types';
import { useDetails } from '../../hooks/detailHooks.js';
import Gallery from '../photos/Gallery.jsx';
import AccessibleImage from '../photos/AccessibleImage.jsx';
import { useAccessibility } from '../../hooks/appContext.js';
import { useDetailStyles } from '../../hooks/detailStyles';
import { placeholder } from '../../hooks/globalStyles';

const DetailPage = ({ match }) => {

  const { theme } = useAccessibility();
  const classes = useDetailStyles(theme);
  
  const id = match.params.id;
  const { plantDetail } = useDetails(id);
  if(!plantDetail) return <h1>loading</h1>;
  const { 
    common_name,
    edible, 
    family, 
    genus,
    flower_images, 
    fruit_images,
    habit_images, 
    image_url,
    scientific_name, 
    leaf_images, 
    bark_images 
  } = plantDetail;  

  return (
    <>
      <div className={classes.mainImageDisplay}>
        <h1>{common_name}  |  {scientific_name}</h1>
        {image_url 
          ? 
          <AccessibleImage className={classes.img} src={image_url} alt={common_name} />
          :
          <AccessibleImage  className={classes.img} alt="image unavailable" src={placeholder} />}
      
        <ul className={classes.detailPageUl}>
          <h3>Taxonomy </h3>
          <li>Family: {family}</li>
          <li>Genus: {genus}</li>
          <h3>Is it edibile? </h3>
          <p>{edible ? 'Yes' : 'No'}</p>
        </ul>
      </div>

      <div className={classes.galleryImagesDisplay}>
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
