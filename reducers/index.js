import { combineReducers } from 'redux';
import polls from './polls/index';

const appReducers = combineReducers({
	polls
});

export default appReducers;
