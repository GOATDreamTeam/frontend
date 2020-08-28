import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ page, totalPages, nextPage, previousPage, imageClass }) => (
  
  <>
    <button className={imageClass.buttons} disabled={page === 1} onClick={previousPage}>&lt;</button>
    <span>{page} / {totalPages}</span>
    <button disabled={page === totalPages} onClick={nextPage}>&gt;</button>
  </>
);

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  imageClass: PropTypes.object.isRequired 
};

export default Pagination;
