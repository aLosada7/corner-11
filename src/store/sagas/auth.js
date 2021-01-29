import axios from '../../axios-manager';
import { put } from 'redux-saga/effects';

import { LOGIN_SUCCESS, LOGIN_FAILED, SET_USER_SUCCESS, SET_USER_FAILED } from '../actions/actionTypes';

export function* loginSaga(action) {
    try {
        let url = '/api/v1/auth/login';

        let response = yield axios.post(url, action.formLogin);
        response = response.data;

        if (response.success) {
            yield put({ type: LOGIN_SUCCESS, token: response.token});
        } else {
            yield put({ type: LOGIN_FAILED, error: response.error ? response.error : "ERROR.UNEXPECTED-ERROR" });
        }
    } catch (error) {
        yield put({ type: LOGIN_FAILED, error: error.response  ? error.response.data  : "ERROR.UNEXPECTED-ERROR" });
    }
};

export function* setUserSaga(action) {
    try {

        const expirationDate = new Date(new Date().getTime() + (86400 * 60));
        yield localStorage.setItem('token', action.token);
        yield localStorage.setItem('expirationDate', expirationDate);

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