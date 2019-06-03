import { combineReducers } from "redux";

import types from "./Types";

const defaultState = {
    client: null,
    errors: {},
};

const client = ( state = defaultState.client, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload;
    }
    if ( type === types.EDIT_SUCCESS ) {
        return payload;
    }
    return state;
};

const errors = ( state = defaultState.errors, { type, payload } ) => {
    if ( type === types.EDIT ) {
        return {};
    }
    if ( type === types.EDIT_ERROR ) {
        return payload;
    }
    return state;
};

export default combineReducers( {
    client,
    errors,
} );
