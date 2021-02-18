import { authReducer } from './reducers';
import { AuthState, LoginInfo, IUserModel } from './types';

const initialState: AuthState = {
    loading: false
};

let updatedState = {};

describe("auth reducers", () => {
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
            email: "aldc30sc@gmail.com",
            name: "Alvaro"
        }

        updatedState = { ...initialState, loading: false, token }

        expect(authReducer(
            { ...initialState, loading: true },
            { type: "LOGIN_SUCCESS", token}
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
})