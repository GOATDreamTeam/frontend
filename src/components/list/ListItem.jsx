import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const ListItem = ({ image_url, common_name, scientific_name }) => (
  // <Link to="plant-details/:${id" >
  <figure>
    <img src={image_url} />
    <figcaption>Common name: {common_name} - Scientific name: {scientific_name}</figcaption>
  </figure>
  // </Link>
);

ListItem.propTypes = {
  image_url: PropTypes.string.isRequired,
  common_name: PropTypes.string.isRequired,
  scientific_name: PropTypes.string.isRequired
};

export default ListItem;
