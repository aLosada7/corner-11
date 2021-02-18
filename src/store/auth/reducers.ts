import { AuthActionTypes, AuthState, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from './types';

const initialState: AuthState = {
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
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.token
            };
        case LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: action.errorMessage
            };
        default:
            return state;
    }
}