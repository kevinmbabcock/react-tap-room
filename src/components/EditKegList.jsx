import React from 'react';
import KegList from './KegList';
import AddKeg from './AddKeg';

function EditKegList(){

  return (
    <div>
      <p>Please select which keg you would like to edit:</p>
      <KegList />
      <AddKeg />
    </div>
  );
}

export default EditKegList;
