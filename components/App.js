import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/main.scss';

const App = () => {

	return (
		<div className='navbar'>
			<h1>Hello World!</h1>
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

App.propTypes = {

};

export default App;
