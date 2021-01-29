import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { loginSaga, setUserSaga } from './auth';

//yield means execute this and wait to finish
export function* watchAuth() {
    yield takeEvery(actionTypes.LOGIN, loginSaga);
    yield takeEvery(actionTypes.LOGIN_SUCCESS, setUserSaga);
}