import keyMirror from 'keymirror';
import Immutable from 'immutable';

const appConstants = Immutable.fromJS({

	actionTypes: keyMirror({

		// POLL ACTIONS
		CREATE_POLL: null,
		DELETE_POLL: null,
		ADD_OPTION: null,
		DELETE_OPTION: null,
		VOTE: null,

		// USER ACTIONS
		CREATE_USER: null,
		DELETE_USER: null,
		UPDATE_USER: null,
	})

});

export default appConstants;
