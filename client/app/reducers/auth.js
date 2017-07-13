import { createReducer } from '../utils/misc';
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGOUT_USER,
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    GET_USER_LOAD,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
} from '../constants/index';

const initialState = {
    user: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null,
    isRegistering: false,
    isRegistered: false,
    registerStatusText: null,
};

export default createReducer(initialState, {
    [LOGIN_USER_REQUEST]: (state) =>
        Object.assign({}, state, {
            isAuthenticating: true,
            statusText: null,
        }),
    [LOGIN_USER_SUCCESS]: (state, payload) =>
        Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: true,
            user: payload.user,
            statusText: 'You have been successfully logged in.',
        }),
    [LOGIN_USER_FAILURE]: (state, payload) =>
        Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: false,
            user: null,
            userName: null,
            statusText: `Authentication Error: ${payload.status} ${payload.statusText}`,
        }),
    [LOGOUT_USER]: (state) =>
        Object.assign({}, state, {
            isAuthenticated: false,
            user: null,
            userName: null,
            statusText: 'You have been successfully logged out.',
        }),
    [REGISTER_USER_SUCCESS]: (state, payload) =>
        Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: true,
            isRegistering: false,
            user: payload.user,
            userName: 'tbd fix me',
            registerStatusText: 'You have been successfully logged in.',
        }),
    [REGISTER_USER_REQUEST]: (state) =>
        Object.assign({}, state, {
            isRegistering: true,
        }),
    [REGISTER_USER_FAILURE]: (state, payload) =>
        Object.assign({}, state, {
            isAuthenticated: false,
            user: null,
            userName: null,
            registerStatusText: `Register Error: ${payload.status} ${payload.statusText}`,
        }),
    [GET_USER_LOAD]: (state) =>
        Object.assign({}, state, {
            isAuthenticating: true,
        }),
    [GET_USER_SUCCESS]: (state, payload) =>
        Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: true,
            user: payload.user,
        }),
    [GET_USER_FAIL]: (state, payload) =>
        Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: false,
            user: null,
            userName: null,
        }),
});
