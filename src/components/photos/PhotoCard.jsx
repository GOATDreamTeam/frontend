import React from 'react';
import PropTypes from 'prop-types';
import { useAccessibility } from '../../hooks/appContext';

import LazyLoad from 'react-lazy-load';
import AccessibleImage from './accessibleImage';
import { useListStyles } from '../list/listPageStyle';

const PhotoCard = ({ photo }) => {
  const { theme } = useAccessibility();
  const classes = useListStyles(theme);

  return (
    <div >
      <figure>
        <LazyLoad>
          <AccessibleImage className={classes.img} src={photo.image_url} alt={photo.copyright} />
        </LazyLoad>
        {/* <figcaption>{photo.copyright}</figcaption> */}
      </figure>
    </div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.object.isRequired
};

export default PhotoCard;
