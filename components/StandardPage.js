import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import UserDash from './UserDash';
import CreatePoll from './CreatePoll';
import PollPage from './PollPage';

import Nav from './Nav';

const StandardPage = ({ children, match }) => {

	return (
		<div>
			<Nav />
			<div className='standardpage-content'>

				<Route path='/settings' component={UserDash}/>
				<Route path={'/create'} component={CreatePoll}/>
				<Route path={'/poll'} component={PollPage}/>

			</div>


		</div>
	);

};

StandardPage.propTypes = {

};

export default StandardPage;
