import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

const PhotoCard = ({ photo }) => {
  return (
    <div>
      <figure>
        <LazyLoad>
          <img src={photo.image_url} alt={photo.copyright} />
        </LazyLoad>
        <figcaption>{photo.copyright}</figcaption>
      </figure>
    </div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.object.isRequired
};

export default PhotoCard;
