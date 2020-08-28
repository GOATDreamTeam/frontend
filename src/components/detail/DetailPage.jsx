import React from 'react';
import PropTypes from 'prop-types';
import MapChart from '../map/MapChart';
import MapLegend from '../map/MapLegend';
import Gallery from '../photos/Gallery.jsx';
import AccessibleImage from '../photos/AccessibleImage.jsx';
import Footer from '../footer/Footer';
import { useDetails } from '../../hooks/detailHooks.js';
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
        <h1 className={classes.title}>{scientific_name} || {common_name}</h1>
        {image_url 
          ? 
          <AccessibleImage className={classes.img} src={image_url} alt={common_name} />
          :
          <AccessibleImage  className={classes.img} alt="image unavailable" src={placeholder} />}
      
        <ul className={classes.detailPageUl}>
          <h3>Taxonomy </h3>
          <li>Family: {family}</li>
          <li>Genus: {genus}</li>
          <br></br>
          <h4>Edible:</h4>
          <p>{edible ? 'Yes' : 'No'}</p>
        </ul>
      </div>

      <section className={classes.map}>
        <MapLegend />
        <MapChart plantDetail={plantDetail}/>
      </section>

      <div className={classes.galleryImagesDisplay}>
        <Gallery photos={leaf_images} />
        <Gallery photos={flower_images} /> 
        <Gallery photos={fruit_images} />
        <Gallery photos={bark_images} />
        <Gallery photos={habit_images} />
      </div>

      <Footer />
    </>
  );
};

DetailPage.propTypes = {
  match: PropTypes.object.isRequired
}; 

export default DetailPage;
