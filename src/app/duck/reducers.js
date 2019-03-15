import { combineReducers } from "redux";
import { Axios } from "common/helpers";
import types from "./types";

const defaultState = {
    isAuthenticated: false,
    token: localStorage.getItem( "token" ),
};

const isAuthenticated = ( state = defaultState.isAuthenticated, { type, payload } ) => {
    if ( type === types.AUTHENTICATE_SUCCESS ) {
        Axios.defaults.headers.common.Authorization = `Bearer ${ payload.token }`;
        return payload.isAuthenticated;
    }
    return state;
};

const token = ( state = defaultState.token, { type, payload } ) => {
    if ( type === types.SET_TOKEN ) {
        Axios.defaults.headers.common.Authorization = `Bearer ${ payload }`;
        return payload;
    }
    return state;
};

export default combineReducers( {
    isAuthenticated,
    token,
} );
