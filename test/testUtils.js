import { ThemeProvider } from '@material-ui/core';
import checkPropTypes from 'check-prop-types';
import { shallow } from 'enzyme';

import theme from '../src/common/Theme';

import mediaQuery from 'css-mediaquery';

export const createMatchMedia = (width) => {
  return query => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

export const shallowWithTheme = (children) => {
    return shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>).dive().dive().dive();
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
}