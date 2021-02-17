import { authReducer } from './reducers';
import { AuthState, LoginInfo } from './types';

const initialState: AuthState = {
    user: null,
    error: null,
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

    /*test("handle login success action", () => {
        const user = { token: "443434" };
        updatedState = { ...initialState, loading: false, user }

        expect(authReducer(
            { ...initialState },
            { type: "SET_USER_SUCCESS", user }
        )).toEqual(updatedState)
    });*/
})