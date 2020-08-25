import React from 'react';
import PropTypes from 'prop-types';
import { fetchPlantById } from '../../services/fetchCalls.js';
import { useDetails } from '../../hooks/detailHooks.js';
//get the data
//dispay

const DetailPage = ({ match }) => {
  // const params = new URLSearchParams(location.search);
  // console.log(params);
  // const id = params.get('id');
  const id = match.params.id;
  console.log(id);
  const plantData = useDetails(id);
  console.log(plantData);
  return (
    <div>
      
    </div>
  );
};

DetailPage.propTypes = {
  match: PropTypes.object.isRequired
  
};

export default DetailPage;
