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

interface DispatchProps {
    login: (user: LoginInfo) => void
}

type Props = DispatchProps

const useStyles = makeStyles<Theme>((theme) =>({
    root: {
        maxWidth: '100%'
    }
}));

export const Auth = (props: Props) => {
    const classes = useStyles();
    //const theme = useTheme();
    const matchesMD = false; //useMediaQuery(theme.breakpoints.down("md"));

    const { login } = props;

    const [formState, setFormState] = useState({ 'email': '', 'password': ''});

    const updateInputValue = (type: any, value: any) => {
        setFormState({ ...formState, [type]: value })
    }

    const onTopSignIn = () => {
        login({ email: formState.email, password: formState.password });
    }

    let topLogin = null;

    if (!matchesMD) {
        topLogin = (
            <Grid item container>
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
                <Button id="login" variant="outlined" type="submit" onClick={onTopSignIn}>
                    <span>Sign In</span>
                </Button>
            </Grid>
        )
    }

    return (
        <div className={classes.root}>
            <Grid container direction="column">
                { topLogin }
                <Grid item container>
                    <Button variant="outlined" type="button" className={classes.loginButton}>
                        <span>Sign Up</span>
                    </Button>
                    <Button variant="outlined" type="button" className={classes.loginButton}>
                        <span>Sign In</span>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        
    }
}

const mapDispatchToProps = {
    login: (user: LoginInfo) => ({ type: 'LOGIN', payload: user })
}



export default connect<any, DispatchProps>(null, mapDispatchToProps)(Auth);