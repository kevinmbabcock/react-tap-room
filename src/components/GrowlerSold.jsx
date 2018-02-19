import React from 'react';
import PropTypes from 'prop-types';

function GrowlerSold(props){

  function handleGrowlerSaleButtonClick() {
    props.onGrowlerSale();
  }

  return (
    <div>
      <button className="btn btn-info" onClick={handleGrowlerSaleButtonClick}>Growler</button>
    </div>
  );
}

GrowlerSold.propTypes = {
  onGrowlerSale: PropTypes.func
};

export default GrowlerSold;
