import * as actionTypes from './actionTypes';

export const login = ({ email, password}) => {
    return {
        type: actionTypes.LOGIN,
        formLogin: {
            email,
            password
        }
    }
}

export const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        user
    }
}