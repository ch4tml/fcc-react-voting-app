const initialState = {

	availablePolls: {}

};

const polls = (state = initialState, action) => {

	switch(action.type) {

		case 'CREATE_POLL': {
			return state;
		}

		case 'DELETE_POLL': {
			return state;
		}

	}

	return state;
};

export default polls;
