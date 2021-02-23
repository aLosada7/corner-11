import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer
import { rootReducer } from './store'

function render(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>
        <BrowserRouter>
            <Route path="/auth">Auth page</Route>
            <Route path="/home">Home page</Route>
            {children}
        </BrowserRouter>
        </Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }