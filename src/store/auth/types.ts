export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const SET_USER_CONFIGURATION = 'SET_USER_CONFIGURATION'
export const SET_USER_CONFIGURATION_SUCCESS = 'SET_USER_CONFIGURATION_SUCCESS'
export const SET_USER_CONFIGURATION_FAILED = 'SET_USER_CONFIGURATION_FAILED'
export const LOGOUT = 'LOGOUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'

export interface AuthState {
    token?: string
    user?: IUserModel
    error?: string
    loading: boolean
}

export interface IUserModel {
    _id: string
    email: string
    name: string
    teamId: string
}

export interface IUserAuthData {
    token: string
    user: IUserModel
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
    payload: IUserAuthData
}

interface LoginFailedAction {
    type: typeof LOGIN_FAILED
    errorMessage: string
}

interface SetUserConfigurationAction {
    type: typeof SET_USER_CONFIGURATION
    payload: LoginInfo
}

interface SetUserConfigurationSuccessAction {
    type: typeof SET_USER_CONFIGURATION_SUCCESS
    payload: IUserAuthData
}

interface SetUserConfigurationFailedAction {
    type: typeof SET_USER_CONFIGURATION_FAILED
    errorMessage: string
}

interface LogOutAction {
    type: typeof LOGOUT
}

interface LogOutSuccessAction {
    type: typeof LOGOUT_SUCCESS
}

interface LogOutFailureAction {
    type: typeof LOGOUT_FAILED
    errorMessage: string
}
  
export type AuthActionTypes = LoginAction | 
LoginSuccessAction | 
LoginFailedAction |
SetUserConfigurationAction |
SetUserConfigurationSuccessAction |
SetUserConfigurationFailedAction |
LogOutAction |
LogOutSuccessAction |
LogOutFailureAction