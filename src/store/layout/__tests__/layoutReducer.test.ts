import { layoutReducer } from '../reducers';
import { LayoutState } from '../types';

const initialState: LayoutState = {
    loading: false
};

let updatedState = {};

describe("layout reducer", () => {
    it("handle SHOW_LOADING action", () => {
        updatedState = { ...initialState, loading: true }

        expect(layoutReducer(
            { ...initialState },
            { type: "SHOW_LOADING" }
        )).toEqual(updatedState)
    });

    it("handle HIDE_LOADING action", () => {

        updatedState = { ...initialState, loading: false }

        expect(layoutReducer(
            { ...initialState },
            { type: "HIDE_LOADING" }
        )).toEqual(updatedState)
    });
})