import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import UserDash from './components/UserDash';
import CreatePoll from './components/CreatePoll';
import PollPage from './components/PollPage';

const Router = () => {

	return (

		<div>

			<Route path='/' component={App} />
			<Route path='/home' component={Home} />
			<Route path='/settings' component={UserDash} />
			<Route path='/poll/:pollid' component={PollPage} />
			<Route path='/create' component={CreatePoll} />

		</div>

	);

};

export default Router;
