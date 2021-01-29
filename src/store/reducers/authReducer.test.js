import authReducer from './authReducer'

const initialState = {
    user: null,
    error: null,
    loading: false
};

let updatedState = {};

describe("auth reducers", () => {
    test("handle LOGIN action", () => {
        updatedState = { ...initialState, loading: true }

        expect(authReducer(
            { ...initialState },
            { type: "LOGIN" }
        )).toEqual(updatedState)
    });

    test("handle login success action", () => {
        const user = { token: "443434" };
        updatedState = { ...initialState, loading: false, user }

        expect(authReducer(
            { ...initialState },
            { type: "SET_USER_SUCCESS", user }
        )).toEqual(updatedState)
    });
})