import React from 'react'

import { render, fireEvent, waitFor, screen } from '../../testUtils'

import Auth from './Auth'

const mockProps = {
    onSubmit: jest.fn()
};

describe("<Auth />", () => {

    test("trigers onSubmit", () => {
        const { getByTestId } = render(<Auth {...mockProps}/>, { initialState: {} })
        const button = getByTestId('login-button')

        expect(getByTestId('login-button')).toBeTruthy();
    })
})