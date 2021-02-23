export const FETCH_TEAM = 'FETCH_TEAM';
export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS';
export const FETCH_TEAM_FAILED = 'FETCH_TEAM_FAILED';

export interface TeamState {
    players: any[]
    error?: string
}

interface FetchTeamAction {
    type: typeof FETCH_TEAM
    token: string
}

interface FetchTeamSuccessAction {
    type: typeof FETCH_TEAM_SUCCESS
    payload: any
}

interface FetchTeamFailedAction {
    type: typeof FETCH_TEAM_FAILED
    errorMessage: string
}
  
export type TeamActionTypes = FetchTeamAction | FetchTeamSuccessAction | FetchTeamFailedAction