import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';

import App  from './components/app/App';
import { store } from './store';
import { authSaga, teamSaga } from './store/modules';

const theStore = store();
theStore.runSaga(authSaga);
theStore.runSaga(teamSaga);

const app = (
    <Provider store={theStore}>  
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
