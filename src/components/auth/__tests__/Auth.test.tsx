import React from 'react'

import { render, fireEvent, waitFor, screen } from '../../../testUtils'

import Auth from '../Auth'

const mockProps = {
    onSubmit: jest.fn()
};

describe("<Auth />", () => {

    test("right authentication changes navigation to home component", () => {
        const { container } = render(<Auth {...mockProps}/>, { initialState: { auth: { token: "example_token"} }  })
        expect(container).toHaveTextContent(/Home page/);
    })
})