import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Home from './Home';
import UserDash from './UserDash';
import CreatePoll from './CreatePoll';
import PollPage from './PollPage';

import Nav from './Nav';

const StandardPage = ({ match }) => {

	return (
		<div>
			<Nav />
			<div className='standardpage-content'>

				<Route path='/home' component={Home}/>
				<Route path='/settings' component={UserDash}/>
				<Route path='/create' component={CreatePoll}/>
				<Route path='/poll' component={PollPage}/>

			</div>


		</div>
	);

};


StandardPage.propTypes = {

};

export default StandardPage;
