import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: null,
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
        case actionTypes.SET_USER:
            return {
                ...state,
                loading: true
            };
        case actionTypes.SET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;