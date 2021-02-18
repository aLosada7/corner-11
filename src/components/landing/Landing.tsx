import React, { useState } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles"; 
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'; 
import FormHelperText from '@material-ui/core/FormHelperText';
import Link from '@material-ui/core/Link';
import { Theme, Typography, useMediaQuery } from '@material-ui/core';import { Redirect } from 'react-router-dom';

import { RootState } from '../../store';
import { LoginInfo } from '../../store/auth/types';

interface Props {
    error: string
    onSubmit: (user: LoginInfo) => void
}

const useStyles = makeStyles<Theme>((theme) =>({
    root: {
        flexGrow: 1,
    },
    header: {
        height: '100vh'
    },
    headerLeft: {
        backgroundImage: 'url(https://images.pexels.com/photos/936129/pexels-photo-936129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
    },
    headerRight: {
        padding: '1rem',
        backgroundColor: '#000'
    },
    topLogin: {
        margin: '16px 0',
        display: 'flex'
    }, 
    loginBtn: {
        borderRadius: '15px'
    },
    bottomRight: {
        padding: '2em'
    },
    title: {
        color: '#fff',
        margin: '24px 0'
    },
    subtitle: {
        color: '#fff',
        margin: '8px 0'
    },
    authOptions: {
        margin: '24px 0',
        [theme.breakpoints.down("md")]: {
            margin: '48px 0',
        }
    },
    authBtn: {
        ...theme.typography.button,
        padding: '1rem 4rem',
        margin: '8px 0'
    },
    signUpBtn: {
        borderRadius: '15px'
    }
}));


export const Landing = (props: Props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    const [formState, setFormState] = useState({ 'email': '', 'password': ''});

    if (props.error) {
        return <Redirect to='auth' />;
      }

    const updateInputValue = (type: any, value: any) => {
        setFormState({ ...formState, [type]: value })
    }

    const login = () => {
        props.onSubmit({ email: formState.email, password: formState.password });
    }

    let topLogin = null;
    let headerLeft = null;

    if (!matchesMD) {
        headerLeft = (
            <Grid item container xs={12} sm={6} className={classes.headerLeft}></Grid>
        );

        topLogin = (
            <Grid item container spacing={1} className={classes.topLogin}>
                <Grid item>
                    <TextField 
                        variant="outlined"
                        placeholder="Enter email"
                        size="small"
                        value={formState.email}
                        onChange={(event) => updateInputValue('email', event.target.value)}
                                />
                </Grid>
                <Grid item direction="column">
                    <TextField 
                        variant="outlined"
                        placeholder="Enter password"
                        size="small"
                        type="password"
                        value={formState.password}
                        onChange={(event) => updateInputValue('password', event.target.value)}
                        aria-describedby="forgot-password"
                    />
                    <FormHelperText id="forgot-password"><Link href="#">Forgot your password?</Link></FormHelperText>
                </Grid>
                <Grid item>
                    <Button data-testid="login-button" variant="outlined" onClick={login} className={classes.loginBtn}>
                        Sign In
                    </Button>
                </Grid>
            </Grid>
        )
    }

    return (
        <div className={classes.root}>
            <Grid container direction="row" className={classes.header}>
                { headerLeft }
                <Grid item container direction="column" lg={6} className={classes.headerRight}>
                    { topLogin }
                    <Grid item container className={classes.bottomRight}>
                        <Grid item className={classes.title}>
                            <Typography variant="h1" className={classes.title}>Live the passion of basketball!</Typography>
                        </Grid>
                        <Grid item className={classes.subtitle}>
                            <Typography variant="h2">Join our community now.</Typography>
                        </Grid>
                        <Grid item container direction="column" className={classes.authOptions}>
                            <Button variant="contained" className={`${classes.authBtn} ${classes.signUpBtn}`}>
                                Register now
                            </Button>
                            <Button variant="outlined" className={`${classes.authBtn} ${classes.loginBtn}`}>
                                Sign In
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        error: state.auth.error
    }
}

const mapDispatchToProps = {
    onSubmit: (user: LoginInfo) => ({ type: 'LOGIN', payload: user })
}



export default connect(mapStateToProps, mapDispatchToProps)(Landing); 