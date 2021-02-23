import { LayoutState, LayoutActionTypes } from './types';

const initialState: LayoutState = {
    loading: false
}

export function layoutReducer(
    state = initialState, 
    action: LayoutActionTypes
    ): LayoutState {
    switch (action.type) {
        case "SHOW_LOADING":
            return {
                ...state,
                loading: true
            }
        case "HIDE_LOADING":
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}