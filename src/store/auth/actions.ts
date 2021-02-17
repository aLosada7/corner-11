import { LOGIN, LoginInfo } from './types';

export const login = (user: LoginInfo) => {
    return {
        type: LOGIN,
        payload: user
    }
}

