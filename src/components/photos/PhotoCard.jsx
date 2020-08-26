import React from 'react';
import PropTypes from 'prop-types';
// import jss from 'jss';
// import preset from 'jss-preset-default';
import { createUseStyles } from 'react-jss';
import { useAccessibility } from '../../hooks/appContext';


const useStyles = createUseStyles({
  frame: {
    border: theme => theme === 'standard' ? 'solid red 5px' : 'solid green 5px' 
  }
});

const PhotoCard = ({ photo }) => {
  const { theme } = useAccessibility();
  const classes = useStyles(theme);

  return (
    <div className={classes.frame}>
      <figure >
        <img  src={photo.image_url} alt={photo.copyright} />
        <figcaption>{photo.copyright}</figcaption>
      </figure>
    </div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.object.isRequired
};

export default PhotoCard;
