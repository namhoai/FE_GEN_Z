import * as actionTypes from './actionTypes';

const initialState = {
    user: {},
    isLoggedIn: false,
    error: null,
    loading: false,
    authRedirectPath: '/'
};

const authStart = (state, action) => ({
    ...state,
    error: null,
    loading: true
});

const authSuccess = (state, action) => ({
    ...state,
    user: action.user,
    error: null,
    isLoggedIn: action.isLoggedIn,
    loading: false
});

const authFail = (state, action) => ({
    ...state,
    error: action.error,
    loading: false
});

const authLogout = (state, action) => ({
    ...state,
    isLoggedIn: false,
    user: null
});

const setAuthRedirectPath = (state, action) => ({
    ...state,
    authRedirectPath: action.path
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return setAuthRedirectPath(state, action);
        default:
            return state;
    }
};

export default reducer;
