import React from 'react';
import { shallow } from 'enzyme';

import { Auth } from '../auth/Auth';
import { shallowWithTheme, createMatchMedia } from '../../../test/testUtils';

let wrapper;
const mockProps = {
    user: null,
    login: jest.fn()
};

describe("redux props", () => {
    beforeAll(() => {
        //window.matchMedia = createMatchMedia(window.innerWidth);
        wrapper = shallow(<Auth {...mockProps} />);
    });

    test("user does not exists", () => {
        let user = null;
        const userProp = mockProps.user;
        expect (userProp).toBe(user);
    })

    test("trigers onSignUp", () => {
        wrapper.find("#login").simulate("click");
        expect(mockProps.login).toHaveBeenCalled();
    })
})