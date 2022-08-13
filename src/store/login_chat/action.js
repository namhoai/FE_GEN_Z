/* eslint-disable */
import * as actionTypes from './actionTypes';

import { CometChat } from '@cometchat-pro/chat';

export const authStart = () => ({
    type: actionTypes.AUTH_START
});

export const authSuccess = (user) => ({
    type: actionTypes.AUTH_SUCCESS,
    user,
    isLoggedIn: true
});

export const authFail = (error) => ({
    type: actionTypes.AUTH_FAIL,
    error
});

export const logoutSuccess = () => ({
    type: actionTypes.AUTH_LOGOUT,
    authRedirectPath: '/login'
});

export const logout = () => (dispatch) => {
    CometChat.logout().then(dispatch(logoutSuccess()));
};

export const auth = (uid, authKey) => (dispatch) => {
    dispatch(authStart());

    CometChat.login(uid, authKey)
        .then((user) => {
            if (user) {
                dispatch(authSuccess(user));
            } else {
                dispatch(authFail(user));
            }
        })
        .catch((error) => {
            console.log('CometChatLogin Failed', error);
            dispatch(authFail(error));
        });
};

export const authCheckState = () => (dispatch) => {
    CometChat.getLoggedinUser()
        .then((user) => {
            if (user) {
                dispatch(authSuccess(user));
            } else {
                dispatch(authFail(user));
            }
        })
        .catch((error) => {
            dispatch(authFail(error));
        });
};

export const setAuthRedirectPath = (path) => ({
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path
});
