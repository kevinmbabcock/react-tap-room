import React from 'react';
import { Link } from 'react-router-dom';


function NavBar(){

  return (
    <div>
      <p style={{textDecoration: 'underline'}}>Navigate this site:</p>
      <Link to='/'>Home</Link>
      <br />
      <br />
      <Link to='/view-kegs'>View Keg List</Link>
      <br />
      <br />
      <Link to='/admin'>Admin</Link>
    </div>
  );
}

export default NavBar;
