import React from 'react';
import PropTypes from 'prop-types';

function AddKeg(props){

  var localStyle = {
    marginTop: '80px',
    lineHeight: '40px',
    padding: '10px'
  };

  var titleStyle = {
    fontFamily: 'monospace',
    fontSize: '40px',
    color: '#660000'
  };

  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;
  let _pints = 0;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onAddingNewKegToList({name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value, pints: _pints.value});
    _name.value='';
    _brand.value='';
    _price.value='';
    _abv.value='';
    _pints.value='';
  }

  return (
    <div style={localStyle}>
      <h6 style={titleStyle}>Add Keg:</h6>
      <form className='form-group' onSubmit={handleNewKegFormSubmission}>
        <label><strong>Name:</strong></label>
        <input
          className='form-control'
          type='text'
          id='name'
          placeholder='Keg Name'
          ref={(input) => {_name = input;}}/>
        <label><strong>Brand:</strong></label>
        <input
          className='form-control'
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
        <label><strong>Price:</strong></label>
        <input
          className='form-control'
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <label><strong>Alcohol % (ABV):</strong></label>
        <input
          className='form-control'
          type='text'
          id='abv'
          placeholder='ABV%'
          ref={(input) => {_abv = input;}}/>
        <label><strong>Pints:</strong></label>
        <input
          className='form-control'
          type='number'
          id='pints'
          placeholder='Pints'
          ref={(input) => {_pints = input;}}/>
        <br />
        <button type='submit' className="btn btn-success">Add Keg</button>
      </form>
    </div>
  );
}

AddKeg.propTypes = {
  onAddingNewKegToList: PropTypes.func
};

export default AddKeg;
