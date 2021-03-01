import React from 'react'

import { render, fireEvent, waitFor, screen } from '../../../testUtils'

import Home from '../Home'

const mockProps = {
    onSubmit: jest.fn()
};

/*describe("<Home />", () => {

})*/