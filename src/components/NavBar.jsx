import React from 'react';
import { Link } from 'react-router-dom';


function NavBar(){

  return (
    <div>
      <Link to='/'>Home</Link> | <Link to='/view-kegs'>View Kegs</Link> | <Link to='/edit-kegs'>Edit Kegs</Link>
    </div>
  );
}

export default NavBar;
