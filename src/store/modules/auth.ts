import axios from '../../axios-manager';
import { put } from 'redux-saga/effects';
import { LOGIN_FAILED, LOGIN_SUCCESS } from '../auth/types';

export function* loginSaga(action: any) {
    try {
        let url = yield '/api/v1/auth/login';

        let response = yield axios.post(url, action.payload);

        if (response.data.success) {
            const expirationDate = yield new Date(new Date().getTime() + (86400 * 60));
            yield localStorage.setItem('token', response.data.token);
            yield localStorage.setItem('expirationDate', expirationDate);
            yield put({ type: LOGIN_SUCCESS, token: response.data.token });
        } else {
            yield put({ type: LOGIN_FAILED, errorMessage: response.data  ? response.data.error : "ERROR.UNEXPECTED-ERROR" });
        }
    } catch (error) {
        error = error.response;
        yield put({ type: LOGIN_FAILED, errorMessage: error.data ? error.data.error : "ERROR.UNEXPECTED-ERROR" });
    }
};
/*
export function* setUserSaga(action: any) {
    try {

        const expirationDate = new Date(new Date().getTime() + (86400 * 60));
        yield localStorage.setItem('token', action.token);
        yield localStorage.setItem('expirationDate', expirationDate.toString());

        let url = '/api/v1/auth/me';
        
        let response = yield axios.get(url);
        response = response.data;

        if (response.success) {
            yield put({ type: SET_USER_SUCCESS, data: response.data});
        } else {
            yield put({ type: SET_USER_FAILED, error: response.error ? response.error : "ERROR.UNEXPECTED-ERROR" });
        }
    } catch (error) {
        yield put({ type: SET_USER_FAILED, error: error.response  ? error.response.data  : "ERROR.UNEXPECTED-ERROR" });
    }
};
*/