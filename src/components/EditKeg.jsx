import React from 'react';

function EditKeg(){

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

  return (
    <div style={localStyle}>
      <h6 style={titleStyle}>Edit Keg:</h6>
      <form className='form-group'>
        <label><strong>Name:</strong></label>
        <input
          className='form-control'
          type='text'
          id='name'
          placeholder='Mannys Pale Ale'/>
        <label><strong>Brand:</strong></label>
        <input
          className='form-control'
          type='text'
          id='brand'
          placeholder='Georgetown Brewing Co.'/>
        <label><strong>Price:</strong></label>
        <input
          className='form-control'
          type='text'
          id='price'
          placeholder='$6.00'/>
        <label><strong>Alcohol %:</strong></label>
        <input
          className='form-control'
          type='text'
          id='abv'
          placeholder='5.4%'/>
        <label><strong>Pints:</strong></label>
        <input
          className='form-control'
          type='text'
          id='pints'
          placeholder='124'/>
        <br />
        <button type='submit' className="btn btn-warning">Apply Changes</button>
      </form>
    </div>
  );
}

export default EditKeg;
