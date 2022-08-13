import { Link, Navigate, useLocation } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Divider, Grid, Stack, TextField, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
// import AuthLogin from '../auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import { connect } from 'react-redux';
import * as actions from '../../../../store/login_chat/action';
import { useState } from 'react';
import { COMETCHAT_CONSTANTS } from '../../../../consts';

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = (props) => {
    const { onLogin, isLoggedIn } = props;
    const { search } = useLocation();
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const [textInput, setTextInput] = useState('');

    const onChange = (e) => {
        setTextInput(e.target.value);
    };

    const onSubmit = () => {
        onLogin(textInput, COMETCHAT_CONSTANTS.AUTH_KEY);
    };

    if (isLoggedIn) {
        const params = new URLSearchParams(search);
        let searchParam = '';
        let pathname = '/utils/kubernetes';
        if (params.get('redirect')) {
            pathname = params.get('redirect');
            searchParam = params.get('search');
        }
        return <Navigate to={{ pathname, search: searchParam }} />;
    }

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                        <Link to="#">
                                            <Logo />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        Hi, Welcome Back
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        fontSize="16px"
                                                        textAlign={matchDownSM ? 'center' : 'inherit'}
                                                    >
                                                        Enter your credentials to continue
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            value={textInput}
                                            onChange={onChange}
                                            style={{ width: '100%' }}
                                            id="standard-basic"
                                            label="UUID"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button style={{ width: '100%' }} onClick={onSubmit} variant="outlined">
                                            Login
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={Link}
                                                to="/pages/register/register3"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                Don&apos;t have an account?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

const mapStateToProps = (state) => ({
    loading: state.loginChat?.loading,
    error: state.loginChat?.error,
    isLoggedIn: state.loginChat?.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (uid, authKey) => dispatch(actions.auth(uid, authKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
