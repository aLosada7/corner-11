import React from 'react'

import { render, fireEvent, waitFor, screen } from '../../testUtils'

import Landing from './Landing'

const mockProps = {
    token: jest.fn(),
    error: jest.fn(),
    onSubmit: jest.fn()
};

describe("<Landing />", () => {

    test("right authentication changes navigation to home component", () => {
        const { container } = render(<Landing {...mockProps}/>, { initialState: { auth: { token: "example_token"} }  })
        expect(container).toHaveTextContent(/Home page/);
    })

    test("wrong authentication changes navigation to auth component", () => {
        const { container } = render(<Landing {...mockProps}/>, { initialState: { auth: { error: "Wrong credentials."} }  })
        expect(container).toHaveTextContent(/Auth page/);
    })
})