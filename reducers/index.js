import { combineReducers } from 'redux';
import polls from './polls/index';
import users from './users/index';

const appReducers = combineReducers({
	polls,
	users
});

export default appReducers;
