import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from './auth/reducers'

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    auth: authReducer
})
export type RootState = ReturnType<typeof rootReducer>

export function store(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [thunk, sagaMiddleware];

    return {
        ...createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))),
        runSaga: sagaMiddleware.run
    };
}