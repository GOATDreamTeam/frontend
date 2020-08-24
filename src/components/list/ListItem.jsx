import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem({ image_url, common_name, scientific_name }) {
  return (
    <figure>
      <img src={image_url} />
      <figcaption>{common_name} These are the names- {scientific_name}</figcaption>
    </figure>
  );
}

ListItem.propTypes = {
  image_url: PropTypes.string.isRequired,
  common_name: PropTypes.string.isRequired,
  scientific_name: PropTypes.string.isRequired
};
