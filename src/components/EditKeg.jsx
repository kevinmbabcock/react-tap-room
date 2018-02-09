import React from 'react';

function EditKeg(){

  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder="Manny's Pale Ale"/>
        <input
          type='text'
          id='brand'
          placeholder='Georgetown Brewing Co.'/>
        <input
          type='text'
          id='price'
          placeholder='$6.00'/>
        <input
          type='text'
          id='abv'
          placeholder='5.4%'/>
        <input
          type='text'
          id='pints'
          placeholder='124'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default EditKeg;
