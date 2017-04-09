import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

	return (

		<div className='navbar'>
			<ul>
				<li>
					<Link to='/home'>Home</Link>
				</li>
				<li>
					<Link to='/create'>Create Poll</Link>
				</li>
				<li>
					<Link to='/poll'>All Polls</Link>
				</li>
				<li>
					<Link to='/settings'>Settings</Link>
				</li>
			</ul>

		</div>

	);

};

export default Navbar;
