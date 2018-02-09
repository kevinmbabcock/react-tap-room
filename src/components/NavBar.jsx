import React from 'react';
import { Link } from 'react-router-dom';


function NavBar(){

  return (
    <div>
      <Link to='/'>Home</Link>
      <br />
      <br />
      <Link to='/view-kegs'>View Keg List</Link>
      <br />
      <br />
      <Link to='/edit-kegs'>Edit Keg List</Link>
    </div>
  );
}

export default NavBar;
