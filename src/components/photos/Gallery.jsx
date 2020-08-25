import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from './PhotoCard';

const Gallery = ({ photos }) => {
  console.log('im in the galory', photos);
  const photoElements = photos.map(photo => (< PhotoCard key={photo.id} photo = { photo } />));
  return (
    <div>
      {photoElements}
    </div>
  );
};

Gallery.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Gallery;
