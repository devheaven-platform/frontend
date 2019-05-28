import { combineReducers } from "redux";

import types from "./Types";

const defaultState = {
    personnel: [],
    clients: [],
    errors: {},
};

const personnel = ( state = defaultState.personnel, { type, payload } ) => {
    if ( type === types.LOAD_SUCCESS ) {
        return payload;
    }
    if ( type === types.CREATE_SUCCESS ) {
        return [ ...state, payload ];
    }
    if ( type === types.REMOVE_SUCCESS ) {
        return state.filter( item => item !== payload );
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
    personnel,
    errors,
} );
