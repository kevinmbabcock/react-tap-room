import React from 'react';

function AddKeg(){

  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Keg Name'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        <input
          type='text'
          id='abv'
          placeholder='ABV%'/>
        <input
          type='text'
          id='pints'
          placeholder='Pints'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default AddKeg;
