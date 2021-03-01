import React, { useEffect, lazy, Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'; 

import theme from '../../common/Theme'
import './App.css'
import Layout from '../../hoc/Layout/Layout'
const Auth = lazy(() => import('../Auth/Auth'))
const Landing = lazy(() => import('../Landing/Landing'))
const Home = lazy(() => import('../Home/Home'));

const Loading: React.FC = () => { return(<div>"I'm loading."</div>) };

let routes = (
    <Switch>        
        <Route path="/" component={Landing} exact/>
        <Route path="/auth" component={Auth}/>
        <Route path="/home" component={Home}/>
    </Switch>
);

interface Props{
    onTrySettingUserConfiguration: () => void
}

const App = (props: Props) => {
    useEffect(() => {
		props.onTrySettingUserConfiguration();
	}, []);

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

const mapDispatchToProps = {
    onTrySettingUserConfiguration: () => ({ type: 'SET_USER_CONFIGURATION' })
}

export default withRouter(connect(null, mapDispatchToProps)(App));
