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
        <EditKeg />
      </div>
    );
  } else if (props.currentRouterPath === '/view-kegs') {
    return (
      <div>
        {kegInformation}
        <SellKegButtons />
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
  currentRouterPath: PropTypes.string
};

export default Keg;
