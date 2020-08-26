import React from 'react';
import PropTypes from 'prop-types';

const PhotoCard = ({ photo }) => {
  return (
    <div>
      <figure>
        <img src={photo.image_url} alt={photo.copyright} />
        <figcaption>{photo.copyright}</figcaption>
      </figure>
    </div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.object.isRequired
};

export default PhotoCard;
