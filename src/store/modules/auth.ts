import { SET_USER_CONFIGURATION_SUCCESS, SET_USER_CONFIGURATION_FAILED, LOGOUT_FAILED, LOGOUT_SUCCESS } from './../auth/types';
import axios from '../../axios-manager';
import { put } from 'redux-saga/effects';
import { IUserAuthData, LOGIN_FAILED, LOGIN_SUCCESS } from '../auth/types';

export function* loginSaga(action: any) {
    try {
        let url = yield '/api/v1/auth/login';
        let response = yield axios.post(url, action.payload);

        if (response.data.success) {
            const token = response.data.token;
            const expirationDate = yield new Date(new Date().getTime() + (86400 * 60));
            yield localStorage.setItem('token', token);
            yield localStorage.setItem('expirationDate', expirationDate);

            url = yield '/api/v1/auth/me';
            response = yield axios.get(url);

            if (response.data.success) {
                yield put({ type: LOGIN_SUCCESS, payload: { token, user: response.data.data as IUserAuthData } });
            } else {
                yield put({ type: LOGIN_FAILED, errorMessage: response.data  ? response.data.error : "ERROR.UNEXPECTED-ERROR" });
            }
        } else {
            yield put({ type: LOGIN_FAILED, errorMessage: response.data  ? response.data.error : "ERROR.UNEXPECTED-ERROR" });
        }
    } catch (error) {
        error = error.response;
        yield put({ type: LOGIN_FAILED, errorMessage: error.data ? error.data.error : "ERROR.UNEXPECTED-ERROR" });
    }
};

export function* configureUserSaga(action: any) {
    const token = yield localStorage.getItem('token');
    const expirationDate = yield localStorage.getItem('expirationDate');

    if (expirationDate <= new Date()) {
        yield put({ type: "LOGOUT" })
    } else {
        try {
            const url = yield '/api/v1/auth/me';
            let response = yield axios.get(url);

            if (response.data.success) {
                yield put({ type: SET_USER_CONFIGURATION_SUCCESS, payload: { token, user: response.data.data as IUserAuthData } });
            } else {
                yield put({ type: "LOGOUT" })
            }
        }catch (error) {
            yield put({ type: "LOGOUT" })
        }
    }
}

export function* logoutSaga(action: any) {
    try {
        yield localStorage.removeItem('token');
        yield localStorage.removeItem('expirationDate');
        yield put({ type: LOGOUT_SUCCESS })
    } catch(error) {
        yield put({ type: LOGOUT_FAILED, errorMessage: error })
    }
}
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