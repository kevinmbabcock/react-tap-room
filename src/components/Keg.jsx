import React from 'react';
import PropTypes from 'prop-types';
import EditKeg from './EditKeg';
import SellKegButtons from './SellKegButtons';


function Keg(props){

  var localStyles = {
    lineHeight: '6px'
  };

  const kegInformation =
    <div style={localStyles}>
      <h2><strong>{props.name}</strong></h2>
      <h4><em>by {props.brand}</em></h4>
      <p>{props.price}</p>
      <p>{props.abv} ABV</p>
    </div>;

  if (props.currentRouterPath === '/admin') {
    return (
      <div>
        {kegInformation}
        <EditKeg onChangingSelectedKeg={props.onChangingSelectedKeg} currentKeg={props.currentKeg}/>
      </div>
    );
  } else if (props.currentRouterPath === '/view-kegs') {
    return (
      <div>
        {kegInformation}
        <SellKegButtons onPintSale={props.onPintSale} onGrowlerSale={props.onGrowlerSale} onLgGrowlerSale={props.onLgGrowlerSale}/>
      </div>
    );
  }
}


Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  pints: PropTypes.number,
  currentRouterPath: PropTypes.string,
  onChangingSelectedKeg: PropTypes.func,
  currentKeg: PropTypes.object,
  onPintSale: PropTypes.func,
  onGrowlerSale: PropTypes.func,
  onLgGrowlerSale: PropTypes.func
};

export default Keg;
