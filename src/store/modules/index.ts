import { takeEvery, takeLatest } from 'redux-saga/effects';

import { LOGIN, LOGOUT, SET_USER_CONFIGURATION } from '../auth/types';
import { loginSaga, configureUserSaga, logoutSaga } from './auth';
import { fetchTeamSaga } from './team';
import { FETCH_TEAM } from './../team/types';

//yield means execute this and wait to finish
export const authSaga = function* watchAuth() {
    yield takeLatest(LOGIN, loginSaga);
    yield takeEvery(SET_USER_CONFIGURATION, configureUserSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    //yield takeEvery(actionTypes.LOGIN_SUCCESS, setUserSaga);
}

export const teamSaga = function* watchTeam() {
    yield takeEvery(FETCH_TEAM, fetchTeamSaga);
    //yield takeEvery(actionTypes.LOGIN_SUCCESS, setUserSaga);
}