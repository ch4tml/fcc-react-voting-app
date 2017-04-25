const initialState = {

	users: {}

};

const users = (state = initialState, action) => {

	switch(action.type) {

		case 'CREATE_USER': {
			return state;
		}

		case 'DELETE_USER': {
			return state;
		}

	}

	return state;
};

export default users;
