import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchPreview.css';

const SearchPreview = ({ option, onClick }) => {
  return (
    <li onClick={onClick} className={styles.preview}>
      <div className={styles.photo}>
        <img src={option.image_url} alt={option.common_name}/>
      </div>
      <div className={styles.text}>
        <div className={styles.common}>
          <span>{option.common_name}</span>
        </div>
        <div className={styles.scientific}>
          <span>{option.scientific_name}</span>
        </div>
      </div>
    </li>
  );
};

SearchPreview.propTypes = {
  option: PropTypes.object,
  onClick: PropTypes.func
};

export default SearchPreview;
