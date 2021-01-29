import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'; 

import theme from '../../common/Theme';
import './App.css';
import Layout from '../../hoc/Layout/Layout';
import Auth from '../auth/Auth';

let routes = (
    <Switch>
        <Route path="/" component={Auth} />
    </Switch>
);

function App() {
    return (
        <ThemeProvider theme={theme}>
			<Layout>
				{routes}
			</Layout>
		</ThemeProvider>
    );
}

export default withRouter(connect(null, null)(App));
