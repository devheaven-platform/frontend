import { combineReducers } from "redux";
import axios from "axios";

import types from "./Types";
import auth from "./Auth";

const defaultState = {
    isConnected: null,
    isAuthenticated: false,
    user: null,
    roles: [],
    errors: {},
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
    if ( type === types.INIT ) {
        const token = auth.getToken();
        if ( token ) {
            axios.defaults.headers.common.Authorization = `Bearer ${ token }`;
            return true;
        }
        return false;
    }
    if ( type === types.LOGIN_SUCCESS ) {
        axios.defaults.headers.common.Authorization = `Bearer ${ payload.token }`;
        auth.setToken( payload.token, payload.expires );
        return true;
    }
    if ( type === types.LOGOUT ) {
        axios.defaults.headers.common.Authorization = null;
        auth.removeToken();
        return false;
    }
    return state;
};

const user = ( state = defaultState.user, { type, payload } ) => {
    if ( type === types.INIT ) {
        const token = auth.getToken();
        if ( token ) {
            return auth.idFromToken( token );
        }
        return null;
    }
    if ( type === types.LOGIN_SUCCESS ) {
        return auth.idFromToken( payload.token );
    }
    if ( type === types.LOGOUT ) {
        return null;
    }
    return state;
};

const roles = ( state = defaultState.roles, { type, payload } ) => {
    if ( type === types.INIT ) {
        const token = auth.getToken();
        if ( token ) {
            return auth.rolesFromToken( token );
        }
        return [];
    }
    if ( type === types.LOGIN_SUCCESS ) {
        return auth.rolesFromToken( payload.token );
    }
    if ( type === types.LOGOUT ) {
        return [];
    }
    return state;
};

const errors = ( state = defaultState.errors, { type, payload } ) => {
    if ( type === types.LOGIN ) {
        return {};
    }
    if ( type === types.LOGIN_ERROR ) {
        return payload;
    }
    return state;
};

export default combineReducers( {
    isConnected,
    isAuthenticated,
    user,
    roles,
    errors,
} );
