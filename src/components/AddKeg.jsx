import React from 'react';

function AddKeg(){

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
      <h6 style={titleStyle}>Add Keg:</h6>
      <form className='form-group'>
        <label><strong>Name:</strong></label>
        <input
          className='form-control'
          type='text'
          id='name'
          placeholder='Keg Name'/>
        <label><strong>Brand:</strong></label>
        <input
          className='form-control'
          type='text'
          id='brand'
          placeholder='Brand'/>
        <label><strong>Price:</strong></label>
        <input
          className='form-control'
          type='text'
          id='price'
          placeholder='Price'/>
        <label><strong>Alcohol %:</strong></label>
        <input
          className='form-control'
          type='text'
          id='abv'
          placeholder='ABV%'/>
        <label><strong>Pints:</strong></label>
        <input
          className='form-control'
          type='text'
          id='pints'
          placeholder='Pints'/>
        <br />
        <button type='submit' className="btn btn-success">Add Keg</button>
      </form>
    </div>
  );
}

export default AddKeg;
