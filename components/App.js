import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/main.scss';

const App = (props) => {

	return (
		<div>
			{props.children}
		</div>
	);

};

App.propTypes = {

};

export default App;
