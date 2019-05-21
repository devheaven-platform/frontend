import { combineReducers } from "redux";

import types from "./Types";

const defaultState = {
    errors: {},
    hours: [],
};

const hours = ( state = defaultState.hours, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload.hours;
    }
    if ( type === types.CREATE_SUCCESS ) {
        return [ payload, ...state ];
    }
    if ( type === types.REMOVE_SUCCESS ) {
        return state.filter( h => h.id !== payload.id );
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
    hours,
    errors,
} );
