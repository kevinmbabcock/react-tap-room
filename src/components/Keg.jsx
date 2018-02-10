import React from 'react';
import PropTypes from 'prop-types';


function Keg(props){

  var localStyles = {
    lineHeight: '6px'
  };

  return (
    <div style={localStyles}>
      <h2><strong>{props.name}</strong></h2>
      <h4><em>by {props.brand}</em></h4>
      <p>{props.price}</p>
      <p>{props.abv} ABV</p>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  pints: PropTypes.string
};

export default Keg;
