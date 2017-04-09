import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import UserDash from './components/UserDash';
import CreatePoll from './components/CreatePoll';
import PollPage from './components/PollPage';
import StandardPage from './components/StandardPage';

const Router = () => {

	return (

		<div>

			<Route path='/' component={StandardPage}/>


		</div>

	);

};

export default Router;
