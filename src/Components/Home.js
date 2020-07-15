import React from 'react';
import {Link} from 'react-router-dom';
import "./home.css"


function Home() {

  return (
	<div className='bgimg'>
		
		<p className='hmart'>Welcome to Home Mart</p>
     <Link  className='aboutlink' to='./About'> Lets Explore</Link>
	</div>
  );
}

export default Home;
