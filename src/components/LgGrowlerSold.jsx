import React from 'react';
import PropTypes from 'prop-types';

function LgGrowlerSold(props){

  function handleLgGrowlerSaleButtonClick() {
    props.onLgGrowlerSale();
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleLgGrowlerSaleButtonClick}>Large Growler</button>
    </div>
  );
}

LgGrowlerSold.propTypes = {
  onLgGrowlerSale: PropTypes.func
};

export default LgGrowlerSold;
