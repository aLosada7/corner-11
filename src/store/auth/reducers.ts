import { AuthActionTypes, AuthState, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, SET_USER_CONFIGURATION, SET_USER_CONFIGURATION_FAILED, SET_USER_CONFIGURATION_SUCCESS, LOGOUT, LOGOUT_FAILED, LOGOUT_SUCCESS } from './types';

const initialState: AuthState = {
    loading: false
}

export function authReducer(
    state = initialState, 
    action: AuthActionTypes
    ): AuthState {
    switch (action.type) {
        case LOGIN:
        case SET_USER_CONFIGURATION:
        case LOGOUT:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
        case SET_USER_CONFIGURATION_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                user: action.payload.user
            };
        case LOGIN_FAILED:
        case SET_USER_CONFIGURATION_FAILED:
        case LOGOUT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.errorMessage
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}