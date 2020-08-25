import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ image_url, common_name, scientific_name }) => (
  <figure>
    <img src={image_url} />
    <figcaption>Common name: {common_name} - Scientific name: {scientific_name}</figcaption>
  </figure>
);

ListItem.propTypes = {
  image_url: PropTypes.string.isRequired,
  common_name: PropTypes.string.isRequired,
  scientific_name: PropTypes.string.isRequired
};

export default ListItem;
