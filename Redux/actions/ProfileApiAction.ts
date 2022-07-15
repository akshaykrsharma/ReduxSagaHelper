import { PROFILE_API, PROFILE_API_SUCCESS, PROFILE_API_ERROR } from '../type';

export function fetchingProfileApi(payload: Object, config: Object) {
	return {
		type: PROFILE_API,
		payload: payload,
		config
	};
}

export const getProfileApi = (payload: Object) => {
	return {
		type: PROFILE_API_SUCCESS,
		payload: payload
	};
};

export function getProfileApiFailure(error: Object) {
	return {
		type: PROFILE_API_ERROR,
		payload: error
	};
}
