import { FETCH_TEAM_FAILED, FETCH_TEAM_SUCCESS } from './../team/types';
import { all, put } from 'redux-saga/effects';

import axios from '../../axios-manager';

export function* fetchTeamSaga(action: any) {
    try {
        let response = yield all([
            yield axios.get(`/api/v1/teams/${action.teamId}`),
            yield axios.get(`/api/v1/teams/${action.teamId}/players`)
        ]);

        if (response[0].data.success) {
            if (response[1].data.success) {
                const teamPlayers = response[1].data.data
                yield put({ type: FETCH_TEAM_SUCCESS, payload: { players: teamPlayers }});
            }
        } else {
            yield put({ type: FETCH_TEAM_FAILED, errorMessage: response.data  ? response.data.error : "ERROR.UNEXPECTED-ERROR" });
        }
    } catch (error) {
        error = error.response;
        yield put({ type: FETCH_TEAM_FAILED, errorMessage: error.data ? error.data.error : "ERROR.UNEXPECTED-ERROR" });
    }
};