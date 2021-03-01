import { teamReducer } from '../reducers';
import { TeamState } from '../types';

const initialState: TeamState = {
    players: []
};

let updatedState = {};

describe("team reducers", () => {

    it("handle FETCH_TEAM_SUCCESS action", () => {

        const players = [ { id: 1, name: "player1" } ]

        updatedState = { ...initialState, players}

        expect(teamReducer(
            { ...initialState },
            { type: "FETCH_TEAM_SUCCESS", payload: { players } }
        )).toEqual(updatedState)
    });

    it("handle FETCH_TEAM_FAILED action", () => {

        const players = []
        const errorMessage = "Try again."

        updatedState = { ...initialState, players, error: errorMessage}

        expect(teamReducer(
            { ...initialState },
            { type: "FETCH_TEAM_FAILED", errorMessage }
        )).toEqual(updatedState)
    });
})