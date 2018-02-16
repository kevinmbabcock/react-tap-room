import React from 'react';
import KegList from './KegList';
import AddKeg from './AddKeg';

function Admin(){

  var titleStyle = {
    fontFamily: 'monospace',
    fontSize: '40px',
    color: '#660000'
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <p style={titleStyle}>Edit Keg:</p>
          <KegList />
        </div>
        <div className="col">
          <AddKeg />
        </div>
      </div>
    </div>
  );
}

export default Admin;
