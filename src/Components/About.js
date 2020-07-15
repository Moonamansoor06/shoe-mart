import React from 'react';
import './about.css';
import {Link} from 'react-router-dom';

function About() {

  return (
	<div className='bgabout'>
		<h1>This is an online shoe store currently dealing in ladies shoes only</h1>
		<p> you can select any item from the available stock</p>
		<Link to="./product">Product Catalogue </Link>
	
	</div>
  );
}

export default About;
