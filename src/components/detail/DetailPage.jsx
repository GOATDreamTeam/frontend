import React from 'react';
import PropTypes from 'prop-types';
import { useDetails } from '../../hooks/detailHooks.js';
import Gallery from '../photos/Gallery.jsx';
import { cssVariables } from '../../hooks/globalStyles';
import AccessibleImage from '../photos/accessibleImage.jsx';
import { useListStyles } from '../list/listPageStyle.js';
import { useAccessibility } from '../../hooks/appContext.js';
import { useDetailStyles } from '../../hooks/detailStyles.js';

const DetailPage = ({ match }) => {

  const { theme } = useAccessibility();
  const classes = useDetailStyles(theme);
  
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
      <div className={classes.mainImageDisplay}>
        <h1>{common_name}  |  {scientific_name}</h1>
        <AccessibleImage  className={classes.img}
          src={image_url} alt={common_name} />
        
        <ul>
          <h3>Taxonomy </h3>
          <li>Family: {family}</li>
          <li>Genus: {genus}</li>
          <h3>Plant Information: </h3>
          <p>{edible ? 'Edible' : 'inedible'}</p>
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
