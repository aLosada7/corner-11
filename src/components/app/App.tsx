import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'; 

import theme from '../../common/Theme';
import './App.css';
import Layout from '../../hoc/Layout/Layout';
const Auth = lazy(() => import('../auth/Auth'));

const Loading: React.FC = () => { return(<div>"I'm loading."</div>) };

let routes = (
    <Switch>
        <Route path="/" component={Auth} />
    </Switch>
);

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
			<Layout>
                <Suspense fallback={<Loading />}>
				    {routes}
                </Suspense>
			</Layout>
		</ThemeProvider>
    );
}

export default withRouter(connect(null, null)(App));
