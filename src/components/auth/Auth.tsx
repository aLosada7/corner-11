import React, { useState } from 'react';
import { makeStyles, useTheme } from "@material-ui/styles"; 
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'; 
//import useMediaQuery from '@material-ui/core/useMediaQuery';

import { RootState } from '../../store';
import { LoginInfo } from '../../store/auth/types';
import { Theme } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

interface Props {
    token?: string
    error?: string
    onSubmit: (user: LoginInfo) => void
}

const useStyles = makeStyles<Theme>((theme) =>({
    root: {
        maxWidth: '100%'
    }
}));

export const Auth = (props: Props) => {
    const classes = useStyles();
    //const theme = useTheme();
    const matchesMD = false; //useMediaQuery(theme.breakpoints.down("md"));

    const [formState, setFormState] = useState({ 'email': '', 'password': ''});

    if (props.token) {
        return <Redirect to='home' />;
    }

    let error = null;
    if (props.error) {
        error = props.error
    }

    const updateInputValue = (type: any, value: any) => {
        setFormState({ ...formState, [type]: value })
    }

    const login = () => {
        console.log("login fired")
        props.onSubmit({ email: formState.email, password: formState.password });
    }

    let topLogin = null;

    if (!matchesMD) {
        topLogin = (
            <Grid direction="column" item container>
                <TextField 
                    variant="outlined"
                    placeholder="Enter email"
                    size="small"
                    value={formState.email}
                    onChange={(event) => updateInputValue('email', event.target.value)}
                            />
                <TextField 
                    variant="outlined"
                    placeholder="Enter password"
                    size="small"
                    value={formState.password}
                    onChange={(event) => updateInputValue('password', event.target.value)}
                />
                <Button data-testid="login-button" variant="outlined" onClick={login}>
                    Sign In
                </Button>
            </Grid>
        )
    }

    return (
        <div className={classes.root}>
            {props.error}
            <Grid container direction="column">
                { topLogin }
            </Grid>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        token: state.auth.token,
        error: state.auth.error
    }
}

const mapDispatchToProps = {
    onSubmit: (user: LoginInfo) => ({ type: 'LOGIN', payload: user })
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);