import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from './PhotoCard';

const Gallery = ({ photos }) => {
  const firstThree = photos.slice(0, 3);
  const photoElements = firstThree.map(photo => (< PhotoCard key={photo.id} photo = { photo } />));
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
