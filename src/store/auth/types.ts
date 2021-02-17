export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export interface AuthState {
    user: any
    error: any
    loading: boolean
}

export interface LoginInfo {
    email: string
    password: string
}

interface LoginAction {
    type: typeof LOGIN
    payload: LoginInfo
}
  
export type AuthActionTypes = LoginAction 