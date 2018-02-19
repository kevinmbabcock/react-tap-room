import React from 'react';
import PropTypes from 'prop-types';

function PintSold(props){

  function handlePintSaleButtonClick() {
    props.onPintSale();
  }

  return (
    <div>
      <button className="btn btn-outline-primary" onClick={handlePintSaleButtonClick}>Pint</button>
    </div>
  );
}

PintSold.propTypes = {
  onPintSale: PropTypes.func
};

export default PintSold;
