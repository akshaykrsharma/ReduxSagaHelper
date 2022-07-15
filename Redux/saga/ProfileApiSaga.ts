import { put, takeEvery, call, all } from 'redux-saga/effects';
import APIManager from '../../networking/APIManager';
import EndPoints from '../../networking/EndPoints';
import { PROFILE_API, PROFILE_API_SUCCESS, PROFILE_API_ERROR } from '../type';

// Worker
function* fetchingProfileApi(params: any, config: any = {}): Generator<any, any, any> {
	try {
		const response = yield call(
			APIManager.createPromise,
			EndPoints.PROFILE_API,
			EndPoints.Method.POST,
			params.payload,
			params.config
		);
		put({ type: PROFILE_API, isFetching: true });
		yield put({
			type: PROFILE_API_SUCCESS,
			payload: response?.data,
			isFetching: false
		});
	} catch (e) {
		yield put({ type: PROFILE_API_ERROR, error: e.message, isFetching: false });
	}
}

// Watcher
function* FetchingProfileApi() {
	yield takeEvery(PROFILE_API, fetchingProfileApi);
}

export default function* rootSaga() {
	yield all([FetchingProfileApi()]);
}
