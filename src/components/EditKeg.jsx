import React from 'react';
import PropTypes from 'prop-types';

function EditKeg(props){

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

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onChangingSelectedKeg({name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value, pints: _pints.value});
    alert('Your changes have been saved');
  }

  return (
    <div style={localStyle}>
      <h6 style={titleStyle}>Edit Keg:</h6>
      <form className='form-group' onSubmit={handleEditFormSubmission}>
        <label><strong>Name:</strong></label>
        <input
          className='form-control'
          type='text'
          id='name'
          placeholder= 'props.currentKeg.name'
          ref={(input) => {_name = input;}}/>
        <label><strong>Brand:</strong></label>
        <input
          className='form-control'
          type='text'
          id='brand'
          placeholder= 'props.currentKeg.brand'
          ref={(input) => {_brand = input;}}/>
        <label><strong>Price:</strong></label>
        <input
          className='form-control'
          type='text'
          id='price'
          placeholder= 'props.currentKeg.brand'
          ref={(input) => {_price = input;}}/>
        <label><strong>Alcohol % (ABV):</strong></label>
        <input
          className='form-control'
          type='text'
          id='abv'
          placeholder= 'props.currentKeg.abv'
          ref={(input) => {_abv = input;}}/>
        <label><strong>Pints:</strong></label>
        <input
          className='form-control'
          type='number'
          id='pints'
          placeholder= 'props.currentKeg.pints'
          ref={(input) => {_pints = input;}}/>
        <br />
        <button type='submit' className="btn btn-warning">Apply Changes</button>
      </form>
    </div>
  );
}

EditKeg.propTypes = {
  onChangingSelectedKeg: PropTypes.func,
  currentKeg: PropTypes.object
};

export default EditKeg;
