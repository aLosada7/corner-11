import { authReducer } from './reducers';
import { AuthState, LoginInfo, IUserModel } from './types';

const initialState: AuthState = {
    loading: false
};

let updatedState = {};

describe("auth reducer", () => {
    it("handle LOGIN action", () => {
        updatedState = { ...initialState, loading: true }

        const loginInfo: LoginInfo = {
            email: "aldc30sc@gmail.com",
            password: "A123alvaro"
        }

        expect(authReducer(
            { ...initialState },
            { type: "LOGIN", payload: loginInfo }
        )).toEqual(updatedState)
    });

    it("handle LOGIN_SUCCESS action", () => {
        const token: string = "randomtoken"
        const user: IUserModel = {
            _id: "5d7a514b5d2c12c7449be042",
            email: "aldc30sc@gmail.com",
            name: "Alvaro",
            teamId: "5d7a514b5d2c12c7449be043"
        }

        updatedState = { ...initialState, loading: false, token, user }

        expect(authReducer(
            { ...initialState, loading: true },
            { type: "LOGIN_SUCCESS", payload: { token, user }}
        )).toEqual(updatedState)
    });

    it("handle LOGIN_FAILED action", () => {
        const errorMessage: string = "ERROR.AUTH.WRONG-CREDENTIALS"

        updatedState = { ...initialState, loading: false, error: errorMessage }

        expect(authReducer(
            { ...initialState, loading: true },
            { type: "LOGIN_FAILED", errorMessage }
        )).toEqual(updatedState)
    });

    it("handle LOGOUT action", () => {
        updatedState = { ...initialState, loading: true }
        expect(authReducer(
            { ...initialState },
            { type: "LOGOUT" }
        )).toEqual(updatedState)
    });

    it("handle LOGOUT_SUCCESS action", () => {
        updatedState = { ...initialState }
        expect(authReducer(
            { ...initialState, loading: true },
            { type: "LOGOUT_SUCCESS" }
        )).toEqual(updatedState)
    });

    it("handle LOGOUT_FAILED action", () => {
        const errorMessage: string = "ERROR.UNEXPECTED-ERROR"

        updatedState = { ...initialState, error: errorMessage}

        expect(authReducer(
            { ...initialState, loading: true },
            { type: "LOGOUT_FAILED", errorMessage }
        )).toEqual(updatedState)
    });
})