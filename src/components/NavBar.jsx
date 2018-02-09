import React from 'react';
import { Link } from 'react-router-dom';


function NavBar(){

  return (
    <div>
      <Link to='/'>Home</Link> | <Link to='/view-kegs'>View Keg List</Link> | <Link to='/edit-kegs'>Edit Keg List</Link> 
    </div>
  );
}

export default NavBar;
