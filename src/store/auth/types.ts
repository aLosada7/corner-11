export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export interface AuthState {
    token?: string
    user?: IUserModel
    error?: any
    loading: boolean
}

export interface IUserModel {
    email: string
    name: string
}

export interface LoginInfo {
    email: string
    password: string
}

interface LoginAction {
    type: typeof LOGIN
    payload: LoginInfo
}

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS
    token: string
}

interface LoginFailedAction {
    type: typeof LOGIN_FAILED
    errorMessage: string
}
  
export type AuthActionTypes = LoginAction | LoginSuccessAction | LoginFailedAction