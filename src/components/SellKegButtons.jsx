import React from 'react';
import PintSold from './PintSold';
import GrowlerSold from './GrowlerSold';
import LgGrowlerSold from './LgGrowlerSold';
import PropTypes from 'prop-types';

function SellKegButtons(props){

  return (
    <div>
      <div className="row">
        <div className="col">
          <PintSold onPintSale={props.onPintSale}/>
        </div>
        <div className="col">
          <GrowlerSold onGrowlerSale={props.onGrowlerSale}/>
        </div>
        <div className="col">
          <LgGrowlerSold onLgGrowlerSale={props.onLgGrowlerSale}/>
        </div>
      </div>
    </div>
  );
}

SellKegButtons.propTypes = {
  onPintSale: PropTypes.func,
  onGrowlerSale: PropTypes.func,
  onLgGrowlerSale: PropTypes.func
};

export default SellKegButtons;
