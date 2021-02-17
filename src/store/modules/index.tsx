import { takeEvery } from 'redux-saga/effects';
import { LOGIN } from '../auth/types';

import { loginSaga } from './auth';

//yield means execute this and wait to finish
export function* watchAuth() {
    yield takeEvery(LOGIN, loginSaga);
    //yield takeEvery(actionTypes.LOGIN_SUCCESS, setUserSaga);
}