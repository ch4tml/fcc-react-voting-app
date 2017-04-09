import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Home from './Home';
import UserDash from './UserDash';
import CreatePoll from './CreatePoll';
import PollPage from './PollPage';

import Nav from './Nav';

const StandardPage = () => {

	return (
		<div>
			<Nav />
			<div className='standardpage-content'>

				<Route exact path='/home' component={Home}/>
				<Route exact path='/settings' component={UserDash}/>
				<Route exact path='/create' component={CreatePoll}/>
				<Route exact path='/poll' component={PollPage}/>

			</div>


		</div>
	);

};

StandardPage.propTypes = {

};

export default StandardPage;
