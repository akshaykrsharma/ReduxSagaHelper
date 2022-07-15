import { PROFILE_API, PROFILE_API_SUCCESS, PROFILE_API_ERROR } from '../type';

const INITIAL_STATE = {
	error: '',
	isFetching: true,
	ProfileApiData: {}
};

const ProfileApiReducer = (state = INITIAL_STATE, action: reduxPropType) => {
	switch (action.type) {
		case PROFILE_API:
			return {
				...state,
				isFetching: true,
				payload: null
			};
		case PROFILE_API_SUCCESS:
			return {
				...state,
				payload: action.payload,
				isFetching: false,
				error: null
			};
		case PROFILE_API_ERROR:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};

		default:
			return state ? {} : INITIAL_STATE;
	}
};

module.exports = {
	ProfileApiReducer
};
