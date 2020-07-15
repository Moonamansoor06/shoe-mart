import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {

  return (
	<div className='navPar'>
        <Link className='nav'  to="/"> Home </Link>
        <Link className='nav' to="/about"> About </Link>
        <Link className='nav' to="/product"> Product </Link>
	</div>
  );
}

export default NavBar;
