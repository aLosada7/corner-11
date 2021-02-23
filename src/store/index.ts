import { combineReducers } from '@reduxjs/toolkit'
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import thunk from 'redux-thunk';

import { layoutReducer } from './layout/reducers'
import { authReducer } from './auth/reducers'
import { teamReducer } from './team/reducers'

export const rootReducer = combineReducers({
    layout: layoutReducer,
    auth: authReducer,
    team: teamReducer
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