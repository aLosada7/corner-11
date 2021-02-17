import { AuthActionTypes, AuthState, LOGIN } from './types';

const initialState: AuthState = {
    user: null,
    error: null,
    loading: false
}

export function authReducer(
    state = initialState, 
    action: AuthActionTypes
    ): AuthState {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}