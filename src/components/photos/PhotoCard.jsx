import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { useAccessibility } from '../../hooks/appContext';


const useStyles = createUseStyles({
  frame: {
    border: theme => theme === 'standard' ? 'solid red 5px' : 'solid green 5px' 
  }
});
import LazyLoad from 'react-lazy-load';

const PhotoCard = ({ photo }) => {
  const { theme } = useAccessibility();
  const classes = useStyles(theme);

  return (
    <div className={classes.frame}>
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
