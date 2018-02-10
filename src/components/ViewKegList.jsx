import React from 'react';
import KegList from './KegList';

function ViewKegList(){

  var localStyles = {
    margin: '0px',
    padding: '0px'
  };

  var titleStyle = {
    fontFamily: 'monospace',
    fontSize: '40px',
    color: '#660000'
  };

  return (
    <div style={localStyles}>
      <p style={titleStyle}><strong>Beers on Tap:</strong></p>
      <KegList />
    </div>
  );
}

export default ViewKegList;
