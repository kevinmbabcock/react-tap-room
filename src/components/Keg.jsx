import React from 'react';
import PropTypes from 'prop-types';


function Keg(props){

  return (
    <div>
      <h6><strong>{props.name}</strong></h6>
      <p>by {props.brand}</p>
      <ul>
        <li>{props.price}</li>
        <li>{props.abv} ABV</li>
      </ul>
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
