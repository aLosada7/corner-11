import SagaTester from 'redux-saga-tester'
import { delay } from 'redux-saga/effects'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { authReducer } from '../auth/reducers'
import { authSaga } from './index'

describe("auth saga", () => {
    let sagaTester;

    const server = setupServer(
        // capture "GET /greeting" requests
        rest.get('/api/v1/auth/login', (req, res, ctx) => {
          // respond using a mocked JSON body
          return res(ctx.json({ success: true }))
        })
    )

    beforeAll(() => {
        sagaTester = new SagaTester({
            reducers: authReducer
        })

        sagaTester.start(authSaga);

        server.listen()
    })

    it("success login", async () => {

        sagaTester.dispatch({ type: "LOGIN" })

        await delay(1000);

        const state = sagaTester.getState();

        expect(state.loading).toBeTruthy();
    })
})