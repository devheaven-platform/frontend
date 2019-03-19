import { combineReducers } from "redux";
import { Axios } from "common/helpers";
import types from "./types";

const defaultState = {
    isConnected: null,
    isAuthenticated: false,
    roles: [],
};

const isConnected = ( state = defaultState.isConnected, { type } ) => {
    if ( type === types.VALIDATE_CONNECTION_SUCCESS ) {
        return true;
    }
    if ( type === types.VALIDATE_CONNECTION_ERROR ) {
        return false;
    }
    return state;
};

const isAuthenticated = ( state = defaultState.isAuthenticated, { type, payload } ) => {
    if ( type === types.LOGIN_SUCCESS ) {
        Axios.defaults.headers.common.Authorization = `Bearer ${ payload.token }`;
        return payload.isAuthenticated;
    }
    if ( type === types.LOGOUT ) {
        Axios.defaults.headers.common.Authorization = null;
        return false;
    }
    return state;
};

const roles = ( state = defaultState.roles, { type, payload } ) => {
    if ( type === types.LOGIN_SUCCESS ) {
        return payload.roles;
    }
    return state;
};

export default combineReducers( {
    isConnected,
    isAuthenticated,
    roles,
} );
