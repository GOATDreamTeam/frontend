import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from './PhotoCard';
import { useAccessibility } from '../../hooks/appContext';
import { useGalleryStyles } from '../../hooks/galleryStyles';

const Gallery = ({ photos }) => {
  const { theme } = useAccessibility;
  const classes = useGalleryStyles(theme);

  const firstThree = photos.slice(0, 3);
  const photoElements = firstThree.map(photo => (< PhotoCard key={photo.id} photo = { photo } />));
  return (
    <div className={classes.galleryMainDiv}>
      {photoElements}
    </div>
  );
};

Gallery.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Gallery;
