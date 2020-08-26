import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ image_url, common_name, scientific_name, id }) => (
  <Link to={`/plant-detail/${id}`} >
    <figure>
      <img src={image_url} />
      <figcaption>Common name: {common_name} - Scientific name: {scientific_name} - Id: {id}</figcaption>
    </figure>
  </Link>
);

ListItem.propTypes = {
  image_url: PropTypes.string.isRequired,
  common_name: PropTypes.string.isRequired,
  scientific_name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ListItem;
