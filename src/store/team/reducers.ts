import { TeamState, TeamActionTypes } from './types';

const initialState: TeamState = {
    players: []
}

export function teamReducer(
    state = initialState, 
    action: TeamActionTypes
    ): TeamState {
    switch (action.type) {
        case "FETCH_TEAM_SUCCESS":
            return {
                ...state,
                players: action.payload.players
            }
        case "FETCH_TEAM_FAILED":
            return {
                ...state,
                error: action.errorMessage
            }
        default:
            return state;
    }
}