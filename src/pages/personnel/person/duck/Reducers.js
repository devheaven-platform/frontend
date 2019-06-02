import { combineReducers } from "redux";

import types from "./Types";

const defaultState = {
    person: {},
    errors: {},
};

const person = ( state = defaultState.person, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        // call to get roles
        return payload;
    }
    return state;
};

const errors = ( state = defaultState.errors, { type, payload } ) => {
    if ( type === types.CREATE ) {
        return {};
    }
    if ( type === types.CREATE_ERROR ) {
        return payload;
    }
    return state;
};

export default combineReducers( {
    person,
    errors,
} );
