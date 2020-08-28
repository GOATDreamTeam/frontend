import React from 'react';
import PropTypes from 'prop-types';
import { useAccessibility } from '../../hooks/appContext';
import { useSearchStyles } from '../../hooks/searchPreview';
import AccessibleImage from '../photos/AccessibleImage';

const SearchPreview = ({ option, onClick }) => {

  const { theme } = useAccessibility();
  const classes = useSearchStyles(theme);

  return (
    <li onClick={onClick} className={classes.preview}>
      <div >
        <AccessibleImage className={classes.photo} src={option.image_url} alt={option.common_name}/>
      </div>
      <div className={classes.text}>
        <div className={classes.common}>
          <span>{option.common_name}</span>
        </div>
        <div className={classes.scientific}>
          <span>{option.scientific_name}</span>
        </div>
      </div>
    </li>
  );
};

SearchPreview.propTypes = {
  option: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchPreview;
