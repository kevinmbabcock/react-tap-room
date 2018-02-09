import React from 'react';

function Header(){

  var headerStyles = {
    fontFamily: 'monospace',
    textAlign: 'center',
    color: '#f2f2f2'
  };

  return (
    <div style={headerStyles}>
      <div>
        <h1 style={{fontSize: '50px'}}>Tap Room</h1>
      </div>
      <h5 style={{fontSize: '25px'}}>Welcome to our store. We have the finest beer selection in the city!</h5>
    </div>
  );
}

export default Header;
