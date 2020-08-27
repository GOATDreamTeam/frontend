import React from 'react';
import PropTypes from 'prop-types';
import { useAccessibility } from '../../hooks/appContext';
import LazyLoad from 'react-lazy-load';
import AccessibleImage from './AccessibleImage';
import { usePhotoCardStyles } from '../../hooks/photoCardStyles';
import { placeholder } from '../../hooks/globalStyles';

const PhotoCard = ({ photo }) => {
  const { theme } = useAccessibility();
  const classes = usePhotoCardStyles(theme);

  return (
    <div >
      <figure>
        <LazyLoad>
          
          <div>
            {photo.image_url 
              ? 
              <AccessibleImage className={classes.img} alt={photo.copyright} src={photo.image_url} />
              : 
              <AccessibleImage className={classes.img} alt="image unavailable" src={placeholder} />}
          </div>
        </LazyLoad>
      </figure>
    </div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.object.isRequired
};

export default PhotoCard;
