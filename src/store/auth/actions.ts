import { LOGIN, LoginInfo, LOGIN_SUCCESS, IUserModel } from './types';

export const login = (user: LoginInfo) => {
    return {
        type: LOGIN,
        payload: user
    }
}

